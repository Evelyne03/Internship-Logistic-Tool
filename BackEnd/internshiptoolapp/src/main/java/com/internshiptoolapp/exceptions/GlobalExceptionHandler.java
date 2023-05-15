package com.internshiptoolapp.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(CustomException.class)
    public ResponseEntity<ExceptionResponseDto> handleConflictCustomException(CustomException exception){

        ExceptionResponseDto responseDto = new ExceptionResponseDto(
                exception.getHttpStatus().value(),
                exception.getHttpStatus().getReasonPhrase(),
                exception.getMessage()
        );

        return ResponseEntity.ok().body(responseDto);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ExceptionResponseDto> handleConflictRuntimeException(RuntimeException exception){

        ExceptionResponseDto responseDto = new ExceptionResponseDto(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                "Something went wrong",
                "There is an internal server issue"
        );

        return ResponseEntity.ok().body(responseDto);
    }

}
