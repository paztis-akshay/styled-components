import React from 'react';
import {Icon, Reject, RequestControlActions, RequestControls, Authorise, Actions, IconExtended} from '../../style-components/request-control-actions-style';

export const RequestControlActionsComponent = (props) => {
    return (
        <RequestControlActions>
            <RequestControls>
                <Icon>icon1</Icon>
                <IconExtended>icon2</IconExtended>
            </RequestControls>
            <Actions>
                <Reject>Reject</Reject>
                <Authorise>Authorise</Authorise>
            </Actions>
        </RequestControlActions>
    )
}