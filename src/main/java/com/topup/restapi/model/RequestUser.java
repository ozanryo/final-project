package com.topup.restapi.model;

import java.util.Random;

public class RequestUser {
    private int code;
    private String firstname;
    private String lastname;
    private String phone;
    private String address;
    private String email;
    private String password;
    private String username;
    public String verifcode = null;
    public boolean statusVerif = false;

    public RequestUser(){}

    public RequestUser(String inputFirst, String inputLast, String inputPhone, String inputAddress,
                String inputEmail, String inputUser, String inputPass){
        this.firstname = inputFirst;
        this.lastname = inputLast;
        this.phone = inputPhone;
        this.address = inputAddress;
        this.email = inputEmail;
        this.password = inputPass;
        this.username = inputUser;
    }

    // Setter
    public void setCode(int input){
        this.code=input;
    }
    public void setFirstname(String input){
        this.firstname = input;
    }
    public void setLastname(String input){
        this.lastname = input;
    }
    public void setPhone(String input){
        this.phone = input;
    }
    public void setEmail(String input){
        this.email = input;
    }
    public void setAddress(String input){
        this.address = input;
    }
    public void setPassword(String input){
        this.password = input;
    }
    public void setUsername(String input){
        this.username = input;
    }
    public void setVerifcode(){
        Random random = new Random();
        int resRandom = random.nextInt((9999 - 100) + 1) + 10;
        this.verifcode = String.valueOf(resRandom);
    }

    // Change Value of Status
    public void acceptStatusVerif(){
        this.statusVerif=true;
    }

    // Getter
    public int getCode(){
        return code;
    }
    public String getFirstname(){
        return firstname;
    }
    public String getLastname(){return lastname;}
    public String getPhone(){
        return phone;
    }
    public String getAddress(){
        return address;
    }
    public String getEmail(){
        return email;
    }
    public String getPassword(){
        return password;
    }
    public String getUsername(){
        return username;
    }
    public boolean getStatusVerif(){
        return statusVerif;
    }
    public String getVerifcode(){
        return verifcode;
    }

}
