package com.yonsei.fund.util.rest;

import lombok.AllArgsConstructor;
import lombok.Data;


@AllArgsConstructor
@Data
public class FundRestResponse<T> {

    private String message;

    private FundRestResponseCode respCode;

    private T body;

    public static <T> FundRestResponse<T> make(String message, FundRestResponseCode code, T body) {
        FundRestResponse<T> restResponse = new FundRestResponse<>(message, code, body);
        return restResponse;
    }
}
