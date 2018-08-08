package com.yonsei.fund.model.login.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

//@RedisHash("FundUser")
@Builder
public class FundUser implements Serializable {

    @Getter
    @Setter
    private String accessToken;

    @Setter
    private String id;

    @Getter
    @Setter
    private String code;

}
