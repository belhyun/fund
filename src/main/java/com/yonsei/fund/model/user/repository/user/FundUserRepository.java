package com.yonsei.fund.model.user.repository.user;

import com.yonsei.fund.model.user.dto.FundUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FundUserRepository extends JpaRepository<FundUser, Long>, FundUserRepositoryCustom {



}
