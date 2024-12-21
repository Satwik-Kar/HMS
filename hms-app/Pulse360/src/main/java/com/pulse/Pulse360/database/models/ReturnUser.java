package com.pulse.Pulse360.database.models;

public class ReturnUser {
    boolean status;
    long id;

    public ReturnUser(boolean status, long id) {
        this.status = status;
        this.id = id;
    }

    public ReturnUser(boolean status) {
        this.status = status;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}