package com.yonsei.fund.model.user.dto;

import javax.persistence.*;
import java.io.Serializable;

//@RedisHash("FundUser")
@Entity
@Table(name="fund_user")
public class FundUser implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String accessToken;

    private String code;

}
