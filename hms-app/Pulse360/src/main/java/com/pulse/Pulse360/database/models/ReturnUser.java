package com.pulse.Pulse360.database.models;

public class ReturnUser {
    boolean status;
    long id;
    long sessionId;

    public ReturnUser(boolean status) {
        this.status = status;
    }

    public ReturnUser(boolean status, long id, long sessionId) {
        this.status = status;
        this.id = id;
        this.sessionId = sessionId;
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

    public long getSessionId() {
        return sessionId;
    }

    public void setSessionId(long sessionId) {
        this.sessionId = sessionId;
    }
}
