package com.yonsei.fund.controller.login.condition;


import com.yonsei.fund.controller.condition.FundCondition;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class FundLoginCondition extends FundCondition {

    private String accessToken;

    private Long expiresIn;

    private String refreshToken;

    private Long refreshTokenExpiresIn;

    private String scope;

    private String stateToken;

    private String tokenType;

    private String kakaoId;

    private String nickname;

    private String profileImage;

    private String thumbnailImage;

}
