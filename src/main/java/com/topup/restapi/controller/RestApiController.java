package com.topup.restapi.controller;

import com.topup.restapi.model.Order;
import com.topup.restapi.model.RequestUser;
import com.topup.restapi.model.User;
import com.topup.restapi.response.controllerMessage;
import com.topup.restapi.response.controllerReceive;
import com.topup.restapi.util.utility;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.concurrent.TimeoutException;

@RestController
@CrossOrigin
@RequestMapping("/oneline")
public class RestApiController {
    private static final Logger logger = LoggerFactory.getLogger(RestApiController.class);
    private controllerReceive conReceive = new controllerReceive();
    private utility Util = new utility();

    @Autowired
    controllerMessage sangPengirim;

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody RequestUser user) throws SQLException, IOException, TimeoutException {
        logger.info("Sending information of new user : {}", user);

        sangPengirim.registrasiUser(user);            // memanggil fungsi response
        String info = conReceive.receiveMessageFromDB();

        return new ResponseEntity<>(info, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/verification", method = RequestMethod.POST)
    public ResponseEntity<?> verifyUser(@RequestBody RequestUser user) throws SQLException, IOException, TimeoutException {
        logger.info("Sending information of Verfication Code : {}", user);

        sangPengirim.verifikasiUser(user);

        String info = conReceive.receiveVerifyNotificationFromDB();

        return new ResponseEntity<>(info, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> loginUser(@RequestBody User user) throws SQLException, IOException, TimeoutException {
        logger.info("Sending information for login : {}", user);

        try{
           sangPengirim.loginUser(user);// memanggil fungsi response
        } catch (Exception e){
           e.printStackTrace();
        }
        return new ResponseEntity<>(conReceive.receiveLoginRespondFromDB(), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/user/update/profile", method = RequestMethod.PUT)
    public ResponseEntity<?> updateProfile(@RequestBody User user) throws SQLException, IOException, TimeoutException {
        logger.info("Sending Information to Update User Profile of : {}", user);
        try{
            sangPengirim.updateUser(user);
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(conReceive.receiveUpdateProfileRespondFromDB(), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/product/telkomsel", method = RequestMethod.GET)
    public ResponseEntity<?> showProduct() throws SQLException, IOException, TimeoutException {
        logger.info("Sending information to show the product from all provider");
        try{
            sangPengirim.requestDataProvider();
        } catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(conReceive.receiveListFromDB(), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/product/indosat", method = RequestMethod.GET)
    public ResponseEntity<?> showProduct2() throws SQLException, IOException, TimeoutException {
        logger.info("Sending information to show the product from all provider");
        try{
            sangPengirim.requestDataProvider2();
        } catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(conReceive.receiveList2FromDB(), HttpStatus.CREATED);
    }
    @RequestMapping(value = "/receipt/all/", method = RequestMethod.POST)
    public ResponseEntity<?> getOrder(@RequestBody User user) throws SQLException, IOException, TimeoutException {
        logger.info("Sending information to show the product from all provider");
        System.out.println(user.getUsername());
        try{
            sangPengirim.getReceiptUser(user);
        } catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(conReceive.receiveAllReceiptUser(), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/product/xl", method = RequestMethod.GET)
    public ResponseEntity<?> showProduct3() throws SQLException, IOException, TimeoutException {
        logger.info("Sending information to show the product from all provider");
        try{
            sangPengirim.requestDataProvider3();
        } catch (Exception e){
            e.printStackTrace();
        }
        String info = conReceive.receiveList2FromDB();
        return new ResponseEntity<>(info, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/topup", method = RequestMethod.POST)
    public ResponseEntity<?> buyProduct(@RequestBody Order order) throws SQLException, IOException, TimeoutException {
        logger.info("Sending information to database for buying produk");
        sangPengirim.buyProduct(order);
        String info = null;

        if (order.getMetode().equals("wallet")) {

            conReceive.receiveOrderRespondFromDB();
            conReceive.receiveOrderPriceFromDB();
            info = conReceive.receiveOrderStatusFromDB();
            //return new ResponseEntity<>(conReceive.receiveOrderPriceFromDB(), HttpStatus.CREATED);

        } else if (order.getMetode().equals("virtual account")) {

            conReceive.receiveOrderRespondFromDB();
            conReceive.receiveOrderPriceFromDB();

            info = conReceive.receiveTransferCodeFromDB();

        } else {
            info = "Metode Produk tidak tersedia";
        }
        return new ResponseEntity<>(info, HttpStatus.CREATED);
    }

}
