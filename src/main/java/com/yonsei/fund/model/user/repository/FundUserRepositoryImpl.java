package com.yonsei.fund.model.user.repository;

import com.google.common.base.Preconditions;
import com.querydsl.jpa.JPQLQuery;
import com.yonsei.fund.controller.login.condition.FundLoginCondition;
import com.yonsei.fund.model.user.entity.FundUser;
import com.yonsei.fund.model.user.entity.QFundUser;
import com.yonsei.fund.model.user.entity.QFundUserAuth;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class FundUserRepositoryImpl extends QuerydslRepositorySupport implements FundUserRepositoryCustom {

    public FundUserRepositoryImpl() {
        super(FundUser.class);
    }

    private final QFundUser qFundUser = QFundUser.fundUser;

    private final QFundUserAuth qFundUserAuth = QFundUserAuth.fundUserAuth;

    @Override
    public FundUser findByAccessToken(FundLoginCondition condition) {

        JPQLQuery<FundUser> query = from(qFundUser).innerJoin(qFundUser.fundUserAuth, qFundUserAuth)
                .where(qFundUserAuth.accessToken.eq(condition.getAccessToken()));

        return query.fetchOne();
    }

    @Override
    public FundUser findByKakaoId(FundLoginCondition condition) {

        Preconditions.checkNotNull(condition.getKakaoId());
        JPQLQuery<FundUser> query = from(qFundUser)
                .where(qFundUser.kakaoId.eq(condition.getKakaoId()));

        return query.fetchOne();
    }

//    @Override
//    public void testFind() {
//        JPQLQuery<FundUser> where = from(QFundUser.fundUser).where(QFundUser.fundUser.accessToken.eq("한글"));
//        where.fetch();
//    }



}
