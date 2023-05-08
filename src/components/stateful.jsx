import React from "react";

class Stateful extends React.Component {
    constructor(probs) {
        super(props);
        this.state = {
            noOfProd: 1,
        };
    }


    render() {
        return (
            <>
                <div>Teact state</div>
                <hr/>
                <div>The total number of product in cart is {this.state.noOfProd}</div>
            </>
       );
    }
}

export default Stateful;