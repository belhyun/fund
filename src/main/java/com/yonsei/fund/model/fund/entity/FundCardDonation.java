package com.yonsei.fund.model.fund.entity;

import com.yonsei.fund.model.base.FundAbstractTimestampEntity;
import com.yonsei.fund.model.user.entity.FundUser;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name="fund_donation")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false, of = { "id" })
@Data
public class FundCardDonation extends FundAbstractTimestampEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    private FundCard fundCard;

    @ManyToOne(cascade = CascadeType.ALL)
    private FundUser fundUser;

    @Column
    private BigDecimal donationAmount;

}
