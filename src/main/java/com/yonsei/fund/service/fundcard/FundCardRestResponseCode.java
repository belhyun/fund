package com.yonsei.fund.service.fundcard;

import com.yonsei.fund.util.rest.FundRestResponseCode;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum FundCardRestResponseCode implements FundRestResponseCode {

    SUCCESS("성공"),
    FAIL("실패");

    private String message;


}
