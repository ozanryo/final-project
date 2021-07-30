package com.topup.database.service;

import com.google.gson.Gson;
import com.topup.database.model.message.Message;
import com.topup.database.model.order.Order;
import com.topup.database.model.order.Receipt;
import com.topup.database.model.order.ReceiptBank;
import com.topup.database.model.respond.RespondReceipt;
import com.topup.database.model.respond.RespondUser;
import com.topup.database.model.respond.RespondVerif;
import com.topup.database.model.user.NewUser;
import com.topup.database.model.user.User;
import com.topup.database.response.dbmessage;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.awt.geom.RectangularShape;
import java.io.IOException;
import java.io.Reader;
import java.util.List;
import java.util.concurrent.TimeoutException;

public class userService {

    private SqlSession session;
    private dbmessage send = new dbmessage();
    private int code_user;
    private String transferUsername;

    public void connectMyBatis() throws IOException {
        Reader reader = Resources.getResourceAsReader("SqlMapConfig.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        session = sqlSessionFactory.openSession();
    }

    // Input User ke Database
    public void inputUser(NewUser user) throws IOException, TimeoutException {
        System.out.println("Memulai proses...");

        connectMyBatis();
        try{
            user.setVerifcode();

            session.insert("topupPulsa.registrationUser", user);

//            String input = new Gson().toJson(user);
            RespondVerif registerResponse = new RespondVerif();
            registerResponse.setMessage("Anda Berhasil Daftar, Mohon Lengkapi Verifikasi");
            registerResponse.setNewUserProfile(user);
            registerResponse.setVerficode(user.getVerifcode());
            registerResponse.changeSuccessStatus();
            String inputMessage = new Gson().toJson(registerResponse);
            send.sendMessagetoRestController(inputMessage);

            session.commit();
        } catch(Exception e){
            e.printStackTrace();
            System.out.println(" Terdapat Masalah dalam input data ");

            RespondVerif registerResponse = new RespondVerif();
            registerResponse.setMessage("Gagal Register, Mohon Lapor");
            String input = new Gson().toJson(registerResponse);

            send.sendMessagetoRestController(input);
        }
    }
    public void verifNewUser(String input) throws IOException, TimeoutException {
        System.out.println("Memulai proses...");

        connectMyBatis();
        try{

            NewUser user = new Gson().fromJson(input, NewUser.class);

            System.out.println("Kode Verifikasi dari RestAPI : " + user.getVerifcode());

            NewUser verifiedUser = session.selectOne("topupPulsa.newUserConfirmation", user.getVerifcode());

            System.out.println(
                    "User ID : " + verifiedUser.getCode() + "\n" +
                    "Firstname : " + verifiedUser.getFirstname() + "\n " +
                    "Lastname : " + verifiedUser.getLastname() + "\n " +
                    "Username : " + verifiedUser.getUsername()+ "\n " +
                    "Email : " + verifiedUser.getEmail() + "\n " +
                    "Phone : " + verifiedUser.getPhone() + "\n " +
                    "Verification : " + verifiedUser.getStatusVerif() + "\n "
            );

            verifiedUser.acceptStatusVerif();

            session.update("topupPulsa.updateVerification", verifiedUser);

            // Convert Object
            User newUser = new User(
                    verifiedUser.getFirstname(),
                    verifiedUser.getLastname(),
                    verifiedUser.getPhone(),
                    verifiedUser.getAddress(),
                    verifiedUser.getEmail(),
                    verifiedUser.getUsername(),
                    verifiedUser.getPassword()
            );

            session.insert("topupPulsa.insertUser", newUser);

            System.out.println("Verifikasi User berhasil");

            RespondVerif sendResponse = new RespondVerif();
            sendResponse.setMessage("Kode Verifikasi Anda Benar, Anda Sudah Terdaftar");
            sendResponse.setUserProfile(newUser);
            sendResponse.changeVerifStatus();
            sendResponse.changeSuccessStatus();
            String inputMessage = new Gson().toJson(sendResponse);
            send.sendVerifyRespond(inputMessage);

            session.commit();
        } catch(Exception e){
            e.printStackTrace();
            RespondVerif sendResponse = new RespondVerif();
            sendResponse.setMessage("Salah Kode Verifikasi, Silahkan Input kembali");
            String inputMessage = new Gson().toJson(sendResponse);
            send.sendVerifyRespond(inputMessage);
        }
    }
    public void checkUser(User input) throws IOException, TimeoutException {
        System.out.println("Memulai proses...");
        connectMyBatis();
        try{
            try{
                String username = input.getUsername();
                User checkUser = session.selectOne("topupPulsa.searchUserByUsername", username);

                if(input.getUsername().equals(checkUser.getUsername())){
                    if (input.getPassword().equals(checkUser.getPassword())) {

                        checkUser.changeLoginStat();
                        session.update("topupPulsa.userLoginStatus", checkUser);

                        RespondUser sendResponse =  new RespondUser();
                        sendResponse.setMessage("Anda Berhasil Login");
                        sendResponse.changeSuccessStatus();
                        sendResponse.setUserProfile(checkUser);

                        List<Order> getUserOrderList = session.selectList("topupPulsa.getOrderByUsername", checkUser.getUsername());

                        if(getUserOrderList != null){
                            sendResponse.setOrderData(getUserOrderList);
                            String inputMessage = new Gson().toJson(sendResponse);
                            send.sendLoginRespond(inputMessage);
                            session.commit();
                            session.close();
                        } else {
                            String inputMessage = new Gson().toJson(sendResponse);
                            send.sendLoginRespond(inputMessage);
                            session.commit();
                            session.close();
                        }
                    } else {
                        RespondUser sendResponse =  new RespondUser();
                        sendResponse.setMessage("Password Salah");
                        String inputMessage = new Gson().toJson(sendResponse);
                        send.sendLoginRespond(inputMessage);
                        session.commit();
                        session.close();
                    }
                } else {
                    RespondUser sendResponse =  new RespondUser();
                    sendResponse.setMessage("Username Tidak Terdaftar");
                    String inputMessage = new Gson().toJson(sendResponse);
                    send.sendLoginRespond(inputMessage);
                    session.commit();
                    session.close();
                }
            } catch(Exception e){
                RespondUser sendResponse =  new RespondUser();
                sendResponse.setMessage("Username Tidak Terdaftar");
                String inputMessage = new Gson().toJson(sendResponse);
                send.sendLoginRespond(inputMessage);
                session.commit();
                session.close();
            }
        } catch(Exception e){
            e.printStackTrace();
        }
    }
    public void updateUser(User input) throws IOException, TimeoutException {
        System.out.println("Memulai proses...");
        connectMyBatis();
        try {
            String username = input.getUsername();
            User updateProfile = (User) session.selectOne("topupPulsa.searchUserByUsername", username);
            System.out.println(updateProfile.getAddress());

            updateProfile.setFirstname(input.getFirstname());
            updateProfile.setLastname(input.getLastname());
            updateProfile.setPhone(input.getPhone());
            updateProfile.setAddress(input.getAddress());
            updateProfile.setEmail(input.getEmail());
            updateProfile.setPassword(input.getPassword());
            updateProfile.changeLoginStat();

            System.out.println(
                    "\nUp to date Profile of " + updateProfile.getUsername() +
                            "\nName : " + updateProfile.getFirstname() + " " + updateProfile.getLastname() +
                            "\nPhone : " + updateProfile.getPhone() + "\nAddress : " + updateProfile.getAddress() +
                            "\nEmail : " + updateProfile.getEmail() + "\nPassword : " + updateProfile.getPassword() +
                            "\nLogin Status : " + updateProfile.getLoginStat()
            );

            int doneUpdating = session.update("topupPulsa.updateProfileUser", updateProfile);
            session.commit();
            session.close();

            if(doneUpdating == 1){
                connectMyBatis();
                try{
                    User getProfile = (User) session.selectOne("topupPulsa.searchUserByUsername", username);

                    RespondUser updatedUser = new RespondUser();
                    updatedUser.setUserProfile(updateProfile);
                    updatedUser.changeSuccessStatus();
                    updatedUser.setMessage("Anda Berhasil Memperbarui Data Pribadi Anda");

                    String toJson = new Gson().toJson(updatedUser);
                    send.sendUpdateProfileRespond(toJson);
                    session.close();
                }catch (Exception e){
                    e.printStackTrace();
                }
            } else {
                Message errMessage = new Message("Gagal Update");
                String toJson = new Gson().toJson(errMessage);
                send.sendUpdateProfileRespond(toJson);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    // Input Orderan ke Database
    public void inputOrderFromUser(Order order) throws IOException, TimeoutException {
        System.out.println("Memulai proses...");

        connectMyBatis();

        try{
            int insertOrder = session.insert("topupPulsa.insertOrder", order);

            System.out.println(" [x] Insert Data untuk Order selesai");

            String retriveOrderCode = (String) session.selectOne("topupPulsa.getOrderCode", order);
            order.setCode(Integer.parseInt(retriveOrderCode));

            this.code_user = order.getCode();

            System.out.println(
                    "\nPemesanan Produk Oleh -->" +
                    "\nKode Username : " + order.getCode() +
                    "\nUsername : " + order.getUsername() +
                    "\nNomor Telepon : " + order.getPhone() +
                    "\nKode Produk : " + order.getProduk() +
                    "\nTotal Tagihan : " + order.getTagihan() +
                    "\nMetode Pembayaran : " + order.getMetode() +
                    "\nStatus Pembayaran : " + order.getStatus() + "\n"
            );

            session.commit();

            if(insertOrder==1){
                System.out.println("Registrasi Order selesai");
                send.sendOrderRespondtoRestController("Registrasi Order berhasil");
            } else {
                System.out.println("Registrasi Order gagal");
                send.sendOrderRespondtoRestController("Registrasi Order gagal");
            }
        } catch(Exception e){
            e.printStackTrace();
        }
    }
    public void insertPriceToOrder(String message) throws IOException, TimeoutException {
        System.out.println("Memulai proses...");
        connectMyBatis();

        try{
            Order order = session.selectOne("topupPulsa.getOrderById", code_user);

            order.setTagihan(Double.parseDouble(message));

            int insertOrder = session.update("topupPulsa.updatePrice", order);

            String inputMessage = "\nPemesanan Produk Oleh -->" +
                    "\nKode Username : " + order.getCode() +
                    "\nUsername : " + order.getUsername() +
                    "\nNomor Telepon : " + order.getPhone() +
                    "\nTotal Tagihan : " + order.getTagihan() +
                    "\nMetode Pembayaran : " + order.getMetode() +
                    "\nStatus Pembayaran : " + order.getStatus() + "\n";

            System.out.println(" [x] Insert Data Tagihan untuk Kode Order : " + order.getCode() + " selesai");

            if(insertOrder==1){
                System.out.println("Registrasi Order selesai");
                send.sendOrderPricetoRestController(inputMessage);

                if(order.getMetode().equals("wallet")){
                    User user = new User();
                    String pembeli = order.getUsername();
                    user = session.selectOne("topupPulsa.searchUserByUsername", pembeli);

                    order.setWallet(user.getWallet());

                    if (order.getWallet() > order.getTagihan()) {
                        order.hitungWallet();
                        user.setWallet(order.getWallet());

                        int updateUser = session.update("topupPulsa.updateUserWallet", user);

                        if(updateUser==1){
                            System.out.println("Pembayaran dengan E-Wallet Selesai");

                            order.changeStatus();

                            String paymentResult =
                                    "\nKode Order : " + order.getCode() +
                                    "\nUsername : " + order.getUsername() +
                                    "\nPhone : " + order.getPhone() +
                                    "\nMetode Pembayaran : " + order.getMetode() +
                                    "\nStatus Pembayaran : " + order.getStatus() +
                                    "\nSisa Wallet : " + user.getWallet() + "\n";

                            System.out.println(paymentResult);

                            session.update("topupPulsa.updateOrderStatus", order);

                            System.out.println(order.getProduk());

                            if (
                                    order.getPhone().substring(0,4).equals("0821")
                            ) {
                                System.out.println("Mengirim Status sudah dibayar ke provider1");
                                send.sendStatusRespondToProvider(String.valueOf(order.getProduk()));
                            } else if (
                                    order.getPhone().substring(0,4).equals("0822")
                            ) {
                                System.out.println("Mengirim Status sudah dibayar ke provider2");
                                send.sendStatusRespondToProvider2(String.valueOf(order.getProduk()));
                            }

                            RespondReceipt newReceipt = new RespondReceipt();

                            List<Order> getUserOrderList = session.selectList("topupPulsa.getOrderByUsername", order.getUsername());
                            newReceipt.changeStatus();
                            newReceipt.setUser(user);
                            newReceipt.setMetode(order.getMetode());
                            newReceipt.setMessage("Transaksi Anda Berhasil");
                            newReceipt.setReceipt(order);
                            newReceipt.setAllReceipt(getUserOrderList);

                            String paymentResultJSON = new Gson().toJson(newReceipt);
                            send.sendWalletPaymentDone(paymentResultJSON);

                        } else {
                            System.out.println("Pembayaran dengan E-Wallet Gagal");

                            Message messageFailWallet = new Message("Pembayaran dengan E-Wallet Gagal");

                            String inputFail = new Gson().toJson(messageFailWallet);  // Change into JSON String
                            send.sendWalletPaymentDone(inputFail);
                        }
                    } else {
                        System.out.println("Wallet User : " + order.getUsername() + "tidak cukup");
                        Message notEnough = new Message("Wallet anda Tidak Cukup");
                        String inputNotEnough = new Gson().toJson(notEnough);
                        send.sendWalletPaymentDone(inputNotEnough);
                    }
                } else if (order.getMetode().equals("virtual account")) {
                    this.transferUsername = order.getUsername();
                    String messageToBank = new Gson().toJson(order);
                    send.sendProductMethodToBank(messageToBank);
                } else {
                    System.out.println("Pembayaran dengan E-Wallet Gagal");
                    Message messageNoMethod = new Message("Method tidak tersedia");

                    String inputNoMethod = new Gson().toJson(messageNoMethod);  // Change into JSON String
                    send.sendMethodErrorRespond(inputNoMethod);
                }
            } else {
                System.out.println("Registrasi Order gagal");
                Message messageFailOrder = new Message("Harga gagal dikirim");

                String inputFailOrder = new Gson().toJson(messageFailOrder);  // Change into JSON String
                send.sendOrderRespondtoRestController(inputFailOrder);
            }
            session.commit();
        } catch(Exception e){
            e.printStackTrace();
            System.out.println("Error karena sudah terdapat data sejenis");
            send.sendOrderRespondtoRestController("Anda belum menyelesaikan pembayaran, mohon selesaikan pembayaran terlebih dahulu");
        }
    }

    public void responseBankReceipt(String message) throws IOException, TimeoutException {
        System.out.println("Memulai proses...");
        connectMyBatis();

        try{
            User orderUser = (User) session.selectOne("topupPulsa.searchUserByUsername", transferUsername);

            List<Order> getUserOrderList = session.selectList("topupPulsa.getOrderByUsername", transferUsername);
            ReceiptBank bankReceipt = new Gson().fromJson(message, ReceiptBank.class);
            RespondReceipt response = new RespondReceipt();
            response.changeStatus();
            response.setUser(orderUser);
            response.setReceiptBank(bankReceipt);
            response.setMetode(bankReceipt.getMetode());
            response.setMessage("Silahkan Membayar Tagihan Melalui Rekening Bank Anda");
            response.setAllReceipt(getUserOrderList);

            String inputMessage = new Gson().toJson(response);
            send.sendTransferCodeToRestController(inputMessage);

            session.close();
        } catch (Exception e){
            e.printStackTrace();
        }
    }

}
