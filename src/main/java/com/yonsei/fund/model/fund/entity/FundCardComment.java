package com.yonsei.fund.model.fund.entity;

import com.yonsei.fund.model.base.FundAbstractTimestampEntity;
import com.yonsei.fund.model.user.entity.FundUser;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name="fund_card_comment")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false, of = { "id" })
@Data
public class FundCardComment extends FundAbstractTimestampEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 댓글내용
     */
    @Column
    private String contents;

    /**
     * 펀드카드
     */
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private FundCard fundCard;

    /**
     * 댓글작성자
     */
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private FundUser fundUser;

}
