import React from "react";

class Add extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <div
                style={{ display: this.props.show ? "block" : "none" }}
                className="modal" >
                <div className="modal-form">
                    <input
                        id="name"
                        placeholder="name"
                        onChange={this.props.hundleChange}
                    />
                    <input
                        id="rating"
                        onChange={this.props.hundleChange}
                        placeholder="rating"
                    />
                    <br />
                    <button onClick={this.props.addNew}>add</button>
                </div>
            </div>
        );
    }
}

export default Add;
