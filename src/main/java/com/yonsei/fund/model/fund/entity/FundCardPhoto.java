package com.yonsei.fund.model.fund.entity;


import com.yonsei.fund.controller.fundcard.dto.FundCardPhotoDto;
import com.yonsei.fund.model.base.FundAbstractTimestampEntity;
import com.yonsei.fund.util.rest.FundRestDtoMaker;
import lombok.*;
import org.springframework.beans.BeanUtils;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name="fund_card_photo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false, of = { "id" })
@Data
public class FundCardPhoto extends FundAbstractTimestampEntity implements FundRestDtoMaker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    private FundCard fundCard;

    @Column
    private String name;

    @Column
    private boolean isMain;

    @Column
    private String imageUrl;

    public FundCardPhotoDto makeDto() {


        FundCardPhotoDto photoDto = FundCardPhotoDto.builder().build();

        BeanUtils.copyProperties(this, photoDto);


        return photoDto;

    }

}
