package com.exam.helper;

public class UserFoundException extends  Exception{
    public UserFoundException() {
        super("user with this username already exits ,try with another one");
    }

    public UserFoundException(String message) {
        super(message);
    }
}
