package com.yonsei.fund.model.fund.entity;

import com.yonsei.fund.controller.fundcard.dto.FundCardDonationDto;
import com.yonsei.fund.model.base.FundAbstractTimestampEntity;
import com.yonsei.fund.model.user.entity.FundUser;
import com.yonsei.fund.util.rest.FundRestDtoMaker;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name="fund_card_donation")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false, of = { "id" })
@Data
public class FundCardDonation extends FundAbstractTimestampEntity implements FundRestDtoMaker<FundCardDonationDto> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    private FundCard fundCard;

    @ManyToOne(cascade = CascadeType.ALL)
    private FundUser fundUser;

    @Column
    private BigDecimal donationAmount;

    @Override
    public FundCardDonationDto makeDto() {
        return FundCardDonationDto.builder()
                .fundUserId(fundUser.getId())
                .createdAt(getCreated().format(DateTimeFormatter.ofLocalizedDateTime(FormatStyle.SHORT)))
                .build();
    }
}
