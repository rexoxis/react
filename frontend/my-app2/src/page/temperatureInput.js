import React from "react";
import BoilingVerdict from "./bolingVerdict";

const scalNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     temperature: ''
        // }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // this.setState({
        //     temperature: e.target.value
        // });

        // Calculater로 부터 전달 받은 함수 onTemperatureChange
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scalNames[scale]}</legend>
                <input value={temperature} onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

export default TemperatureInput;