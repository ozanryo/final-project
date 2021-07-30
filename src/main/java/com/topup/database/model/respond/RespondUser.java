package com.topup.database.model.respond;

import com.topup.database.model.order.Order;
import com.topup.database.model.user.User;

import java.util.List;

public class RespondUser {
    private User userProfile = null;
    private boolean success = false;
    private String message;
    private List<Order> orderData = null;

    public RespondUser(){}
    public RespondUser(User user, String message){
        this.userProfile = user;
        this.message = message;
    }

    // Setter
    public void setUserProfile(User input){
        this.userProfile = input;
    }
    public void changeSuccessStatus(){
        this.success = true;
    }
    public void setMessage(String input){
        this.message = input;
    }
    public void setOrderData(List<Order> input){
        this.orderData = input;
    }

    public User getUserProfile(){
        return userProfile;
    }
    public String getMessage(){
        return message;
    }
    public boolean getSuccess(){
        return success;
    }
}
