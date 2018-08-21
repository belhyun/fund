package com.yonsei.fund.configuration.datasource;

import com.yonsei.fund.model.base.FundAbstractTimestampEntity;
import org.hibernate.event.spi.PreInsertEvent;
import org.hibernate.event.spi.PreInsertEventListener;
import org.hibernate.event.spi.PreUpdateEvent;
import org.hibernate.event.spi.PreUpdateEventListener;

import java.time.LocalDateTime;

public class FundEntityChangeableListener implements PreInsertEventListener, PreUpdateEventListener {

    private void setPropertyState(Object[] propertyStates, String[] propertyNames,String propertyName,Object propertyState) {
        for(int i = 0; i < propertyNames.length; i++) {
            if (propertyName.equals(propertyNames[i])) {
                propertyStates[i] = propertyState;
                return;
            }
        }
    }
    private void onInsert(Object entity,Object[] state, String[] propertyNames) {

        if (entity instanceof FundAbstractTimestampEntity) {
            FundAbstractTimestampEntity domainObject = (FundAbstractTimestampEntity) entity;
            LocalDateTime date = LocalDateTime.now();
            domainObject.setCreated(date);
            setPropertyState(state, propertyNames, "createdAt", date);
            domainObject.setUpdated(date);
            setPropertyState(state, propertyNames, "updatedAt", date);
        }
    }

    private void onUpdate(Object entity,Object[] state, String[] propertyNames) {

        if (entity instanceof FundAbstractTimestampEntity) {
            FundAbstractTimestampEntity domainObject = (FundAbstractTimestampEntity) entity;
            LocalDateTime date = LocalDateTime.now();
            setPropertyState(state, propertyNames, "createdAt", date);
            domainObject.setUpdated(date);
            setPropertyState(state, propertyNames, "updatedAt", date);
        }
    }

    @Override
    public boolean onPreInsert(PreInsertEvent event) {
        onInsert(event.getEntity(), event.getState(), event.getPersister().getPropertyNames());
        return false;
    }

    @Override
    public boolean onPreUpdate(PreUpdateEvent event) {
        onUpdate(event.getEntity(), event.getState(), event.getPersister().getPropertyNames());
        return false;
    }
}
