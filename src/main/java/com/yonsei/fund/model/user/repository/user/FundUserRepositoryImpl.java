package com.yonsei.fund.model.user.repository.user;

import com.querydsl.jpa.JPQLQuery;
import com.yonsei.fund.model.user.dto.FundUser;
import com.yonsei.fund.model.user.dto.QFundUser;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class FundUserRepositoryImpl extends QuerydslRepositorySupport implements FundUserRepositoryCustom {

    public FundUserRepositoryImpl() {
        super(FundUser.class);
    }

    @Override
    public void testFind() {
        JPQLQuery<FundUser> where = from(QFundUser.fundUser).where(QFundUser.fundUser.accessToken.eq("�ѱ�"));
        where.fetch();
    }

}