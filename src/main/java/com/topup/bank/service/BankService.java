package com.topup.bank.service;

import com.google.gson.Gson;
import com.topup.bank.model.Bank;
import com.topup.bank.response.sendBank;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.Reader;
import java.util.concurrent.TimeoutException;

public class BankService {
    private SqlSession session;
    private sendBank send = new sendBank();

    public void connectMyBatis() throws IOException {
        Reader reader = Resources.getResourceAsReader("SqlMapConfig.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        session = sqlSessionFactory.openSession();
    }

    public void insertBank(Bank input) throws IOException, TimeoutException {
        connectMyBatis();

        input.setTransferCode("8000" + input.getPhone());

        System.out.println(
                "Receipt : " +
                        "\nUsername : " + input.getUsername() + "\nPhone : " + input.getPhone() +
                        "\nProduk : " + input.getProduk() + "\nProvider : " + input.getProvider() +
                        "\nTagihan : " + input.getTagihan() + "\nKode Transfer : " + input.getTransferCode()
        );

        System.out.println("Memulai proses input data transaksi pada database bank");

        session.insert("topupPulsa.insertBankTransaction", input);

        System.out.println("Proses Input Data Transaksi Selesai");
        String receipt = new Gson().toJson(input);
        send.sendTransferCodeToDB(receipt);

        session.commit();
    }


}
