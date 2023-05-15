package com.internshiptoolapp.exceptions;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class ExceptionResponseDto {

    private final String timestamp= ZonedDateTime.now().format(DateTimeFormatter.ISO_OFFSET_DATE_TIME);
    private int statusCode;
    private String error;
    private String message;

    public ExceptionResponseDto(int statusCode, String error, String message) {
        this.statusCode = statusCode;
        this.error = error;
        this.message = message;
    }

    public ExceptionResponseDto(int statusCode, String message) {
        this.statusCode = statusCode;
        this.message = message;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
