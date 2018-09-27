package com.yonsei.fund.model.user.entity;

import com.yonsei.fund.controller.login.condition.FundLoginCondition;
import com.yonsei.fund.controller.login.dto.FundLoginDto;
import com.yonsei.fund.model.base.FundAbstractTimestampEntity;
import com.yonsei.fund.model.fund.entity.FundCard;
import com.yonsei.fund.model.fund.entity.FundCardComment;
import com.yonsei.fund.model.fund.entity.FundCardDonation;
import com.yonsei.fund.util.rest.FundRestDtoMaker;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.List;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name="fund_user")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false, of = { "id" })
@Data
public class FundUser extends FundAbstractTimestampEntity implements FundRestDtoMaker<FundLoginDto> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String kakaoId;

    @Column
    private String nickname;

    @Column
    private String profileImage;

    @Column
    private String thumbnailImage;

    @OneToOne(fetch = FetchType.LAZY,
            cascade =  CascadeType.ALL,
            mappedBy = "fundUser")
    private FundUserAuth fundUserAuth;

    @OneToMany(fetch = FetchType.LAZY,
                cascade = CascadeType.ALL,
                mappedBy = "fundUser")
    private List<FundCard> fundCards;

    @OneToMany(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            mappedBy = "fundUser")
    private List<FundCardComment> fundCardComments;

    @OneToMany(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            mappedBy = "fundUser")
    private List<FundCardDonation> fundCardDonations;


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
        fundUser.setKakaoId(condition.getKakaoId());
        fundUser.setNickname(condition.getNickname());
        fundUser.setFundUserAuth(fundUserAuth);
        fundUser.setProfileImage(condition.getProfileImage());
        fundUser.setThumbnailImage(condition.getThumbnailImage());
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
