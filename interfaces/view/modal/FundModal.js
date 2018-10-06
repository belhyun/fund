import ui from "redux-ui";
import React from "react";
import connect from "react-redux/es/connect/connect";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';
import fundModalActions from '../../actions/fundModal/fundModalActions';

const log = console.log;

@connect(state => ({
    fundModal: state.fundModal,
    authentication: state.authentication
}))
class FundModal extends React.Component {
    constructor(props) {
        super(props);
        this.ok = this.ok.bind(this);
        this.close = this.close.bind(this);
    }

    componentDidMount() {
        log("+++++componentDidMount+++++");
        log(this.props.fundModal.fundModal);

    }

    componentDidUpdate() {
        log("+++++componentDidUpdate+++++");
        log(this.props.fundModal.fundModal);

    }

    componentWillReceiveProps() {
        log("+++++componentWillReceiveProps+++++");
        log(this.props.fundModal.fundModal);
    }

    ok() {
    }

    close() {

        fundModalActions.close({
            modal: false
        })(this.props.dispatch);

    }

    render() {
        if (_.isUndefined(this.props.fundModal.fundModal)) {
            return (
                <div></div>
            )
        }
        return (
                <div>
                    <div>
                        <Modal isOpen={this.props.fundModal.fundModal.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle} charcode="Y">{this.props.fundModal.fundModal.title}</ModalHeader>
                            <ModalBody>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>댓글 </InputGroupText>
                                    </InputGroupAddon>
                                    <Input className="text-align-left"></Input>
                                </InputGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.ok}>확인</Button>
                                <Button color="secondary" onClick={this.close}>취소</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
        );
    }
}

// function mapStateToProps(state) {
//     return state.authentication;
// }
// const connectedFundModal = connect(mapStateToProps)(FundModal);
export default FundModal;