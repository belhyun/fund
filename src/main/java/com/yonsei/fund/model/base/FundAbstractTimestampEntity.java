package com.yonsei.fund.model.base;

import com.yonsei.fund.configuration.datasource.FundEntityChangeableListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@MappedSuperclass
@EntityListeners(FundEntityChangeableListener.class)
public abstract class FundAbstractTimestampEntity {

    @Column(name = "created_at", columnDefinition = "DATETIME(3)")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "updated_at", columnDefinition = "DATETIME(3)")
    private LocalDateTime updatedAt;

    public LocalDateTime getCreated() {
        return createdAt;
    }

    public void setCreated(LocalDateTime created) {
        this.createdAt= created;
    }

    public LocalDateTime getUpdated() {
        return updatedAt;
    }

    public void setUpdated(LocalDateTime updated) {
        this.updatedAt = updated;
    }
}
