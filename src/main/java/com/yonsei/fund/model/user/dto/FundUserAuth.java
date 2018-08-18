package com.yonsei.fund.model.user.dto;

import com.yonsei.fund.model.user.dto.base.FundAbstractTimestampEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name="fund_user_auth")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class FundUserAuth extends FundAbstractTimestampEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "fund_user_id", nullable = false)
    private FundUser fundUser;

    @Column
    private String accessToken;

    @Column
    private Long expiresIn;

    @Column
    private String refreshToken;

    @Column
    private Long refreshTokenExpiresIn;

    @Column
    private String scope;

    @Column
    private String stateToken;

    @Column
    private String tokenType;

    @Column
    private LocalDateTime lastLoginAt;

    @PrePersist
    private void setLastLoginAt() {
        this.lastLoginAt = LocalDateTime.now();
    }

}
