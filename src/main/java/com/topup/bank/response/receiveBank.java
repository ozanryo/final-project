package com.topup.bank.response;

import com.google.gson.Gson;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DeliverCallback;
import com.topup.bank.model.Bank;
import com.topup.bank.service.BankService;
import com.topup.database.model.user.User;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.TimeoutException;

public class receiveBank {
    private ConnectionFactory connectionFactory;
    private Connection con;
    private Channel ch;

    private sendBank send = new sendBank();
    private BankService bankService = new BankService();

    public void connectRabbit() throws IOException, TimeoutException {
        connectionFactory = new ConnectionFactory();
        connectionFactory.setHost("localhost");
        con = connectionFactory.newConnection();
    }

    public void messagePhoneFromDB() throws IOException, TimeoutException {
        connectRabbit();

        ch = con.createChannel();
        ch.queueDeclare("requestMethodToBank", false, false, false, null);

        DeliverCallback deliverCallback = (consumerTag, delivery) -> {
            String message = new String(delivery.getBody(), StandardCharsets.UTF_8);
            System.out.println(" [x] Received " + message);
            try {
                Bank bank = new Gson().fromJson(message, Bank.class);
                bankService.insertBank(bank);

            } catch (TimeoutException e) {
                e.printStackTrace();
            }
        };
        ch.basicConsume("requestMethodToBank", true, deliverCallback, consumerTag -> { });
    }
}
