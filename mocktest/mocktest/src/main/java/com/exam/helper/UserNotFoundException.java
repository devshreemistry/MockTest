package com.exam.helper;

public class UserNotFoundException extends Exception{
    public UserNotFoundException() {
        super("user with this username not found with this username");
    }

    public UserNotFoundException(String message) {
        super(message);
    }
}
