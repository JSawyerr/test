import React from 'react'

export default class lifecycle extends React.Component {

    componentDidMount(){
        // action occurs when the component is mounted
        // alert("component is being mounted");
    }

    render() {
        return (
            <div>
                Lifecycle
                <div className="custom-modal">Show when the page is mounted
                </div>
            </div>
        );
    }
}