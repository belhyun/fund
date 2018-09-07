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
                state.set("modal", action.modal);
            case '@@redux-ui/UNMOUNT_UI_STATE':
                return {

                }
                //state.set("modal", false);
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
                        <Modal isOpen={this.props.ui.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle} charcode="Y">공지사항</ModalHeader>
                            <ModalBody>
                                한국여성의전화를 후원해 주신 모든 분께 진심으로 감사드리며 2017년 기부영수증 발급 안내드립니다.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>확인</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>취소</Button>
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