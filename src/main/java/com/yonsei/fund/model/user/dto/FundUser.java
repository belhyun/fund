package com.yonsei.fund.model.user.dto;

import com.yonsei.fund.controller.login.condition.FundLoginCondition;
import com.yonsei.fund.controller.login.dto.FundLoginDto;
import com.yonsei.fund.model.base.FundAbstractTimestampEntity;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name="fund_user")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false, of = { "id" })
@Data
public class FundUser extends FundAbstractTimestampEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY,
            cascade =  CascadeType.ALL,
            mappedBy = "fundUser")
    private FundUserAuth fundUserAuth;


    public static FundUser makeFromCondition(FundLoginCondition condition) {
        FundUser fundUser = FundUser.builder().build();
        FundUserAuth fundUserAuth = FundUserAuth.builder()
                .accessToken(condition.getAccessToken())
                .expiresIn(condition.getExpiresIn())
                .refreshToken(condition.getRefreshToken())
                .refreshTokenExpiresIn(condition.getRefreshTokenExpiresIn())
                .scope(condition.getScope())
                .stateToken(condition.getStateToken())
                .tokenType(condition.getTokenType())
                .build();
        fundUserAuth.setFundUser(fundUser);
        fundUser.setFundUserAuth(fundUserAuth);
        return fundUser;
    }

    public FundLoginDto makeDto() {
        return FundLoginDto.builder()
                .accessToken(fundUserAuth.getAccessToken())
                .expiresIn(fundUserAuth.getExpiresIn())
                .refreshToken(fundUserAuth.getRefreshToken())
                .refreshTokenExpiresIn(fundUserAuth.getRefreshTokenExpiresIn()).build();
    }
}
