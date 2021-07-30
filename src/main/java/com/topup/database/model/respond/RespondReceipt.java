package com.topup.database.model.respond;

import com.topup.database.model.order.Order;
import com.topup.database.model.order.Receipt;
import com.topup.database.model.order.ReceiptBank;
import com.topup.database.model.user.User;

import java.util.List;

public class RespondReceipt {
    private User user;
    private Order receipt;
    private List<Order> allReceipt;
    private ReceiptBank receiptBank;
    private String metode;
    private boolean success = false;
    private String message;

    // Setter
    public void setUser(User input){
        this.user = input;
    }
    public void setReceipt(Order input){
        this.receipt = input;
    }
    public void setMessage(String input){
        this.message = input;
    }
    public void setReceiptBank(ReceiptBank input){
        this.receiptBank = input;
    }
    public void setAllReceipt(List<Order> input){this.allReceipt = input;}
    public void setMetode(String input){
        this.metode = input;
    }

    // Getter
    public User getUser(){
        return user;
    }
    public Order getReceipt(){
        return receipt;
    }
    public ReceiptBank getReceiptBank(){
        return receiptBank;
    }
    public String getMessage(){
        return message;
    }
    public List<Order> getAllOrder(){return allReceipt;}
    public String getMetode() {
        return metode;
    }

    // Change Value
    public void changeStatus(){
        this.success = true;
    }

}
