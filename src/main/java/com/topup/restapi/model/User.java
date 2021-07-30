package com.topup.restapi.model;

import java.util.Random;

public class User {
    private int code;
    private String firstname;
    private String lastname;
    private String phone;
    private String address;
    private String email;
    private String password;
    private String username;
    private Double wallet = 0.0;
    private boolean loginstat = false;

    public User(){}

    public User(String inputFirst, String inputLast, String inputPhone, String inputAddress,
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
    public void setWallet(Double input){
        this.wallet = input;
    }


    // Getter
    public int getCode(){
        return code;
    }
    public String getFirstname(){
        return firstname;
    }
    public String getLastname(){
        return lastname;
    }
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
    public Double getWallet(){return wallet;}
    public boolean getLoginStat(){return loginstat;}

    // Calculate
    public void hitungWallet(Double inputWallet, Double inputHarga){
        if(inputWallet > inputHarga){
            this.wallet = inputWallet - inputHarga;
        } else {
            this.wallet = inputWallet;
            System.out.println("Wallet tidak cukup");
        }
    }

    // Change Value
    public void changeLoginStat(){
        this.loginstat = true;
    }
}
