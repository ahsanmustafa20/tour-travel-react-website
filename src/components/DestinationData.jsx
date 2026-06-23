import "./DestinationStyles.css";
import React from "react";

class DestinationData extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="des-img">
                    <img src={this.props.img1} />
                    <img src={this.props.img2} />
                </div>
            </div>
        )
    }
}

export default DestinationData;