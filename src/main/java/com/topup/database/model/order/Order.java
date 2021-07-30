package com.topup.database.model.order;

public class Order {
    private int code;
    private String username;
    private String phone;
    private int produk = 0;
    private String provider;
    private Double tagihan = 0.0;
    private String metode;
    private boolean status = false;
    private Double wallet;

    // Constructor
    public Order(){

    }

    public Order(String inputUser, String inputPhone, int inputProduk, Double inputTagihan,
                 String inputMetode) {
        this.username = inputUser;
        this.phone = inputPhone;
        this.produk = inputProduk;
        this.tagihan = inputTagihan;
        this.metode = inputMetode;
    }

    // Setter
    public void setCode(int input) {
        this.code = input;
    }
    public void getUsernmae(String input){
        this.username = input;
    }
    public void setMetode(String input){
        this.metode = input;
    }
    public void setPhone(String input) {
        this.phone = input;
    }
    public void setCodeProduk(int input) {
        this.produk = input;
    }
    public void setTagihan(Double input){
        this.tagihan = input;
    }
    public void setWallet(Double input){
        this.wallet = input;
    }
    public void setProvider(String input){
        this.provider = input;
    }

    // Getter
    public int getCode(){
        return code;
    }
    public String getUsername(){
        return username;
    }
    public String getMetode(){
        return metode;
    }
    public String getPhone(){
        return phone;
    }
    public int getProduk(){
        return produk;
    }
    public Double getTagihan(){
        return tagihan;
    }
    public boolean getStatus(){
        return status;
    }
    public Double getWallet(){
        return wallet;
    }
    public String getProvider(){
        return provider;
    }

    // Change Status
    public void changeStatus(){
        this.status = true;
    }
    // Calculate
    public void hitungWallet(){
        if(getWallet() > getTagihan()) {
            this.wallet = getWallet() - getTagihan();
        } else {
            System.out.println("Jumlah Wallet tidak cukup");
        }
    }

}
