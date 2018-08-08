package com.yonsei.fund.model.login.repository;


import com.yonsei.fund.model.login.dto.FundUser;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public class FundLoginRepositoryImpl implements FundLoginRepository {

    private static final String HASH_KEY = "FUND_USER";


    @Resource(name="redisTemplate")
    private HashOperations<String, String, String> hashOperations;


    @Override
    public Optional<FundUser> findByCode(String code) {

        if (hashOperations.hasKey(HASH_KEY, code)) {
            return Optional.of(FundUser.builder().code(code)
                    .accessToken(hashOperations.get(HASH_KEY, code)).build());
        }
        return Optional.empty();
    }

    @Transactional
    @Override
    public Optional<FundUser> save(FundUser fundUser) {
        if (hashOperations.putIfAbsent(HASH_KEY, fundUser.getCode(), fundUser.getAccessToken())) {
            return Optional.of(fundUser);
        }
        return findByCode(fundUser.getCode());
    }
}
