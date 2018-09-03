package com.yonsei.fund.service.login;

import com.yonsei.fund.util.rest.FundRestResponseCode;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum FundLoginRestResponseCode implements FundRestResponseCode {

        LOGIN_SUCCESS("로그인에 성공했습니다."),
        ACC_TOKEN_EXPIRED("토큰이 만료되었습니다."),
        HTTP_NOT_FOUND("찾을 수 없습니다.");

        private String message;

}
