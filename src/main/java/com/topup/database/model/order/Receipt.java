package com.topup.database.model.order;

public class Receipt {
    private int code;
    private String username;
    private String phone;
    private int produk = 0;
    private String provider;
    private Double tagihan = 0.0;
    private String metode;
    private boolean status = false;

    public Receipt(int code, String username, int produk, String phone, String provider,
                   Double tagihan){
        this.code = code;
        this.username = username;
        this.produk = produk;
        this.phone = phone;
        this.provider = provider;
        this.tagihan = tagihan;
    }

    // Setter
    public void changeStatus(){
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
    public void setMetode(String input){this.metode = input;}

    // Getter
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
