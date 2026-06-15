package org.ats.exception;

import jakarta.validation.ValidationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalException {

    @ExceptionHandler(DepartmentInvalidException.class)
    public ResponseEntity<?> duplicateDepartment(DepartmentInvalidException exception) {
        return new ResponseEntity(exception.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ValidationException.class)
    public ResponseEntity<String> validationException(ValidationException validationException) {

        return new ResponseEntity<>(validationException.getMessage(), HttpStatus.BAD_REQUEST);
    }
}
