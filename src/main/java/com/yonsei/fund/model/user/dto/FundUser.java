package com.yonsei.fund.model.user.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

//@RedisHash("FundUser")
@Builder
@Entity
@Table(name="fund_user")
public class FundUser implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @Setter
    private String accessToken;


    @Getter
    @Setter
    private String code;

}
