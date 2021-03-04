import * as React from "react";


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date : new Date()};
    }

    tick() {
        this.setState({
            date : new Date()
        });
    }

    componentDidMount() {
        this.timeId = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillMount() {
        clearInterval(this.timeId);
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;