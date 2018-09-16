package com.yonsei.fund.model.fund.repository.fundcard;

import com.querydsl.jpa.JPQLQuery;
import com.yonsei.fund.controller.fundcard.FundCardCondition;
import com.yonsei.fund.model.fund.entity.FundCard;
import com.yonsei.fund.model.fund.entity.QFundCard;
import com.yonsei.fund.model.fund.entity.QFundCardPhoto;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;

public class FundCardRepositoryImpl extends QuerydslRepositorySupport implements FundCardRepositoryCustom {

    public FundCardRepositoryImpl() {
        super(FundCard.class);
    }

    private final QFundCard qFundCard = QFundCard.fundCard;

    private final QFundCardPhoto qFundCardPhoto = QFundCardPhoto.fundCardPhoto;


    @Override
    public List<FundCard> getFundCardList(FundCardCondition condition) {
        JPQLQuery<FundCard> query = from(qFundCard).innerJoin(qFundCard.fundCardPhotos, qFundCardPhoto)
                //.where(qFundCard.startedAt.loe(LocalDateTime.now()))
                //.where(qFundCard.endedAt.goe(LocalDateTime.now()))
                .orderBy(qFundCard.id.desc());
        return query.fetch();
    }

    @Override
    public FundCard getFundCard(FundCardCondition condition) {
        JPQLQuery<FundCard> query = from(qFundCard).innerJoin(qFundCard.fundCardPhotos, qFundCardPhoto)
                //.where(qFundCard.startedAt.loe(LocalDateTime.now()))
                .where(qFundCard.id.eq(Long.valueOf(condition.getFundCardId())))
                .orderBy(qFundCard.id.desc());
        return query.fetchOne();
    }
}
