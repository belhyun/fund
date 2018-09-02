import {css} from 'react-emotion';
import {ClipLoader} from 'react-spinners';
import ui from "redux-ui";
import React from "react";

@ui({
    state: {
        loading: false
    },
    reducer: (state, action) => {
        switch (action.type) {
            case 'TOGGLE_SPINNER':
                return state.set("loading", action.vars);
            case '@@redux-ui/UNMOUNT_UI_STATE':
                console.log(state);
                return state;
        }
        return state;
    }
})
class FundSpinner extends React.Component {
    render() {
        return (
            <div className='sweet-loading'>
                <ClipLoader
                    className={css`
                                    display: block;
                                    margin: auto;
                                    border-color: red;
                                    top: 0;
                                    left: 0;
                                    bottom: 0;
                                    right: 0;
                                    position: absolute;
                                `}
                    sizeUnit={"px"}
                    size={150}
                    color={'#123abc'}
                    loading={this.props.ui.loading}
                />
            </div>
        )
    }
}

export default FundSpinner;