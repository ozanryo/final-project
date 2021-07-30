package com.topup.restapi.response;

import com.google.gson.Gson;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.topup.restapi.model.Order;
import com.topup.restapi.model.RequestUser;
import com.topup.restapi.model.User;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.concurrent.TimeoutException;

@Service("sangPengirim")
public class controllerMessage {

    // RestAPI --> DB
    // Mengambil data dari RestAPI (via Postman) dan mengirim ke DB APP dengan JSON String
    public void registrasiUser(RequestUser user) throws IOException, TimeoutException{
        String message = new Gson().toJson(user);

        ConnectionFactory conFac = new ConnectionFactory();
        conFac.setHost("localhost");
        Connection con = conFac.newConnection();
        Channel channel = con.createChannel();

        try{
            channel.queueDeclare("regisUser", false, false, false, null);
            channel.basicPublish("", "regisUser", null, message.getBytes(StandardCharsets.UTF_8));
            System.out.println("[x] Sending json string to RabbitMQ");
        } catch (Exception e){
            e.printStackTrace();
        }
    }
    public void verifikasiUser(RequestUser user) throws IOException, TimeoutException{
        String message = new Gson().toJson(user);

        ConnectionFactory conFac = new ConnectionFactory();
        conFac.setHost("localhost");
        Connection con = conFac.newConnection();
        Channel channel = con.createChannel();

        try{
            channel.queueDeclare("verifUser", false, false, false, null);
            channel.basicPublish("", "verifUser", null, message.getBytes(StandardCharsets.UTF_8));
            System.out.println("[x] Sending json string to RabbitMQ");
        } catch (Exception e){
            e.printStackTrace();
        }
    }
    public void loginUser(User user) throws IOException, TimeoutException {
        String message = new Gson().toJson(user);
        ConnectionFactory conFac = new ConnectionFactory();
        conFac.setHost("localhost");
        Connection con = conFac.newConnection();
        Channel channel = con.createChannel();

        try{
            channel.queueDeclare("loginUser", false, false, false, null);
            channel.basicPublish("", "loginUser", null, message.getBytes(StandardCharsets.UTF_8));
            System.out.println("[x] Sending json string to RabbitMQ");
        } catch (Exception e){
            e.printStackTrace();
        }

    }
    public void updateUser(User user) throws IOException, TimeoutException {
        String message = new Gson().toJson(user);
        ConnectionFactory conFac = new ConnectionFactory();
        conFac.setHost("localhost");
        Connection con = conFac.newConnection();
        Channel channel = con.createChannel();

        try{
            channel.queueDeclare("updateUser", false, false, false, null);
            channel.basicPublish("", "updateUser", null, message.getBytes(StandardCharsets.UTF_8));
            System.out.println("[x] Sending json string to RabbitMQ");
        } catch (Exception e){
            e.printStackTrace();
        }
    }


    // Meminta pesan untuk request data ke provider dari RestAPI ke DB APP
    public void requestDataProvider() throws IOException, TimeoutException{

        ConnectionFactory conFac = new ConnectionFactory();
        conFac.setHost("localhost");
        Connection con = conFac.newConnection();
        Channel channel = con.createChannel();

        String message = "Request All Telkomsel Product";

        try{
            channel.queueDeclare("askTelkomList", false, false, false, null);
            channel.basicPublish(
                    "",
                    "askTelkomList",
                    null,
                    message.getBytes(StandardCharsets.UTF_8)
            );
            System.out.println(" [x] Sending Request to RabbitMQ ");
        } catch (Exception e){
            e.printStackTrace();
        }
    }
    public void requestDataProvider2() throws IOException, TimeoutException {

        ConnectionFactory conFac = new ConnectionFactory();
        conFac.setHost("localhost");
        Connection con = conFac.newConnection();
        Channel channel = con.createChannel();

        String message = "Request All Indosat Product";

        try{
            channel.queueDeclare("askIndosatList", false, false, false, null);
            channel.basicPublish(
                    "",
                    "askIndosatList",
                    null,
                    message.getBytes(StandardCharsets.UTF_8)
            );
            System.out.println(" [x] Sending Request to RabbitMQ ");
        } catch (Exception e){
            e.printStackTrace();
        }
    }
    public void requestDataProvider3() throws IOException, TimeoutException {

        ConnectionFactory conFac = new ConnectionFactory();
        conFac.setHost("localhost");
        Connection con = conFac.newConnection();
        Channel channel = con.createChannel();

        String message = "Request All XL Product";

        try{
            channel.queueDeclare("askXLList", false, false, false, null);
            channel.basicPublish(
                    "",
                    "askXLList",
                    null,
                    message.getBytes(StandardCharsets.UTF_8)
            );
            System.out.println(" [x] Sending Request to RabbitMQ ");
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    // Mengambil data dari RestAPI (via Postman) dan mengirim ke DB APP
    public void buyProduct(Order order) throws IOException, TimeoutException {

        ConnectionFactory conFac = new ConnectionFactory();
        conFac.setHost("localhost");
        Connection con = conFac.newConnection();
        Channel channel = con.createChannel();

        try{
            channel.queueDeclare("inputOrderFromUser", false, false, false, null);

            String inputMessage = new Gson().toJson(order);

            channel.basicPublish(
                    "",
                    "inputOrderFromUser",
                    null,
                    inputMessage.getBytes(StandardCharsets.UTF_8)
            );
            System.out.println(" [x] Sending Request to RabbitMQ ");
        } catch (Exception e){
            e.printStackTrace();
        }
    }



}
