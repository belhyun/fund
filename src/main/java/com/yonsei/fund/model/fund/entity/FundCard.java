package com.yonsei.fund.model.fund.entity;

import com.google.common.collect.Lists;
import com.yonsei.fund.controller.fundcard.dto.FundCardDto;
import com.yonsei.fund.model.base.FundAbstractTimestampEntity;
import com.yonsei.fund.model.user.entity.FundUser;
import com.yonsei.fund.util.rest.FundRestDtoMaker;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name="fund_card")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false, of = { "id" })
@Data
public class FundCard extends FundAbstractTimestampEntity implements FundRestDtoMaker<FundCardDto> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;

    @Column
    private String contents;

    /**
     * 목표기부금액
     */
    @Column
    private BigDecimal targetAmount;

    /**
     * 기부카드 생성자
     */
    @ManyToOne(optional = false)
    private FundUser fundUser;

    /**
     * 시작시간
     */
    @Column
    private LocalDateTime startedAt;

    /**
     * 종료시간
     */
    @Column
    private LocalDateTime endedAt;

    /**
     * 기부자 목록
     */
    @OneToMany(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            mappedBy = "fundCard")
    private List<FundCardDonation> fundCardDonations = Lists.newArrayList();

    /**
     * 펀드카드 사진
     */
    @OneToMany(fetch = FetchType.EAGER,
            cascade = CascadeType.ALL,
            mappedBy = "fundCard")
    private List<FundCardPhoto> fundCardPhotos = Lists.newArrayList();

    /**
     * 펀드카드 댓글
     */
    @OneToMany(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            mappedBy = "fundCard")
    private List<FundCardComment> fundCardComments = Lists.newArrayList();

    public void addFundCardDonation(FundCardDonation fundCardDonation) {
        this.fundCardDonations.add(fundCardDonation);
    }

    public void addFundCardComments(FundCardComment comment) {
        this.fundCardComments.add(comment);
    }

    @Override
    public FundCardDto makeDto() {
        return FundCardDto.builder()
                .fundCardId(id.intValue())
                .startedAt(startedAt.format(DateTimeFormatter.ofLocalizedDateTime(FormatStyle.SHORT)))
                .endedAt(endedAt.format(DateTimeFormatter.ofLocalizedDateTime(FormatStyle.SHORT)))
                .contents(contents)
                .photoDtos(fundCardPhotos.stream().map(FundCardPhoto::makeDto).collect(Collectors.toList()))
                .commentDtos(fundCardComments.stream().map(FundCardComment::makeDto).collect(Collectors.toList()))
                .title(title).build();
    }
}
