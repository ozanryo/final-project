package com.topup.database.model.respond;

import com.topup.database.model.user.NewUser;
import com.topup.database.model.user.User;

public class RespondVerif {
    private NewUser newUser = null;
    private User doneUser = null;
    private boolean success = false;
    private boolean verifStatus = false;
    private String message;
    private String verficode;

    public RespondVerif(){}
    public RespondVerif(NewUser user, User finishUser, String message){
        this.newUser = user;
        this.message = message;
        this.doneUser = finishUser;
    }

    // Setter
    public void setUserProfile(User input){
        this.doneUser = input;
    }
    public void setNewUserProfile(NewUser input){
        this.newUser = input;
    }
    public void setMessage(String input){
        this.message = input;
    }
    public void setVerficode(String input){
        this.verficode = input;
    }

    // Change Boolean Value
    public void changeSuccessStatus(){
        this.success = true;
    }
    public void changeVerifStatus(){
        this.verifStatus = true;
    }


    // Getter
    public NewUser getNewUserProfile(){
        return newUser;
    }
    public User getUserProfile(){
        return doneUser;
    }
    public String getMessage(){
        return message;
    }
    public boolean getSuccess(){
        return success;
    }
    public String getVerifcode(){
        return verficode;
    }
}
