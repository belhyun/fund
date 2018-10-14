package com.yonsei.fund.controller.login.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FundLoginDto {

    private String accessToken;

    private Long expiresIn;

    private String refreshToken;

    private Long refreshTokenExpiresIn;

    private Long fundUserId;

    private String kakaoId;
}
