import React from "react";
import connect from "react-redux/es/connect/connect";
import Render from "react-x-render";
import Carousel from "nuka-carousel";

@connect(state => ({
    fundCard: state.fundCard
}))
export default class FundCardDetailPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const fundCard = this.props.fundCard.fundCard;
        if (_.isUndefined(fundCard)) {
            return (
                <div></div>
            )
        }
        const fundCardSubPhotos = __.reject(fundCard.photoDtos, (photo) => {
            return photo.main;
        });
        return (
            <div>
                <div className="row">
                    {fundCard.photoDtos.map((image) =>
                        <Render if={image.main}>
                            <div className="col-md-auto"><img className="img-thumbnail img-fluid center-block" src={image.imageUrl} /></div>
                        </Render>

                    )}
                </div>
                <div className="row">
                    <Carousel autoPlay={true} centerMode={true}>
                        {fundCardSubPhotos.map((image) =>
                            <div className="col-md-auto"><img className="img-thumbnail img-fluid center-block" src={image.imageUrl} /></div>
                        )}
                    </Carousel>
                </div>
            </div>
        )

    }
}