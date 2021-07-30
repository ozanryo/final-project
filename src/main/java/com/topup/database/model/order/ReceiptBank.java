package com.topup.database.model.order;

public class ReceiptBank {
    private int code;
    private String transfer_code;
    private boolean status = false;
    private String username;
    private String phone;
    private int produk = 0;
    private String provider;
    private Double tagihan = 0.0;
    private String metode;

    // Setter
    public void setTransferCode(String input){
        this.transfer_code = input;
    }
    public void changeStatus(String input){
        this.status = true;
    }
    public void setUsername(String input){
        this.username = input;
    }
    public void setPhone(String input){
        this.phone = input;
    }
    public void setProduk(Integer input){
        this.produk = input;
    }
    public void setProvider(String input){
        this.provider = input;
    }
    public void setTagihan(Double input){
        this.tagihan = input;
    }
    public void setMetode(String input){
        this.metode = input;
    }

    // Getter
    public String getTransferCode(){
        return transfer_code;
    }
    public boolean getStatus(){
        return status;
    }
    public String getUsername(){
        return username;
    }
    public String getPhone(){
        return phone;
    }
    public String getProvider(){
        return provider;
    }
    public String getMetode(){
        return metode;
    }
    public Double getTagihan(){
        return tagihan;
    }
    public int getProduk(){
        return produk;
    }
}
