package com.yonsei.fund.model.user.repository;

import com.yonsei.fund.model.user.entity.FundUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FundUserRepository extends JpaRepository<FundUser, Long>, FundUserRepositoryCustom {



}
