package com.mobilephonestore.backend.payload.request;

import java.util.Set;
import lombok.Data;

@Data
public class SignupRequest {
    private String username;
    private String email;
    private String role;
    private String password;
}
