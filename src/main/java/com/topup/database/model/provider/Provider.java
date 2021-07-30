package com.topup.database.model.provider;

public class Provider {
    private int id;
    private String name;
    private String providerlogo;

    public Provider(){}

    public Provider(String inputName, String providerlogo){
        this.name=inputName;
        this.providerlogo=providerlogo;
    }

    // Setter
    public void setId(int input){this.id = input;}
    public void setName(String input){
        this.name = input;
    }
    public void setProviderlogo(String input){
        this.providerlogo = input;
    }

    // Getter
    public int getId(){return id;}
    public String getName(){
        return name;
    }
    public String getProviderlogo(){
        return providerlogo;
    }

}
