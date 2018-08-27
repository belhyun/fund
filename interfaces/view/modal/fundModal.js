import ui from "redux-ui";
import React from "react";
import connect from "react-redux/es/connect/connect";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

@ui({
    state: {
        modal: false
    },
    reducer: (state, action) => {
        switch (action.type) {
            case 'TOGGLE_MODAL':
                return state.set("modal", action.modal);
        }
        return state;
    }
})
class FundModal extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        const modal = !this.props.ui.modal;
        this.props.dispatch({
            type: "TOGGLE_MODAL", modal
        });
    }

    render() {
        return (
                <div>
                    <div>
                        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                        <Modal isOpen={this.props.ui.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle} charcode="Y">Modal title</ModalHeader>
                            <ModalBody>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
        );
    }
}

function mapStateToProps(state) {
    return state.authentication;
}
const connectedFundModal = connect(mapStateToProps)(FundModal);
export default connectedFundModal;