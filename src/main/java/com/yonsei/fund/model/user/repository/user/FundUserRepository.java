package com.yonsei.fund.model.user.repository.user;

import com.yonsei.fund.model.user.dto.FundUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface FundUserRepository extends JpaRepository<FundUser, Long>, FundUserRepositoryCustom {
}
