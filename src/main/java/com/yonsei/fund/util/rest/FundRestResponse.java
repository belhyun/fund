package com.yonsei.fund.util.rest;

import lombok.AllArgsConstructor;

import static com.yonsei.fund.util.rest.FundRestResponseCode.*;


@AllArgsConstructor
public class FundRestResponse<T> {

    private String message;

    private FundRespCode respCode;

    private T body;

    public static <T> FundRestResponse<T> make(String message, FundRespCode code, T body) {
        FundRestResponse<T> restResponse = new FundRestResponse<>(message, code, body);
        return restResponse;
    }
}
