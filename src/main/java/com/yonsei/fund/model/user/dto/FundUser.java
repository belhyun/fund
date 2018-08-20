package com.yonsei.fund.model.user.dto;

import com.yonsei.fund.controller.login.condition.FundLoginCondition;
import com.yonsei.fund.model.user.dto.base.FundAbstractTimestampEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name="fund_user")
@Builder
@AllArgsConstructor
@NoArgsConstructor
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
        FundUser.builder().build().setFundUserAuth(FundUserAuth.builder()
                .accessToken(condition.getAccessToken())
                .expiresIn(condition.getExpiresIn())
                .refreshToken(condition.getRefreshToken())
                .refreshTokenExpiresIn(condition.getRefreshTokenExpiresIn())
                .scope(condition.getScope())
                .stateToken(condition.getStateToken())
                .tokenType(condition.getTokenType())
                .fundUser(fundUser).build());
        return fundUser;
    }
}
