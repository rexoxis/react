import React from "react";
import TemperatureInput from "./temperatureInput";
import BoilingVerdict from "./bolingVerdict";

// 컴포넌트가 각자의 state 값을 가진다
// 동일한 데이터를 가지는 state 값이 있고, 변경에 따라 여러 컴포넌트에 동시에 반영하려고한다.
// 가장 가까운 공통의 컴퍼넌트를 찾아 state 값을 관리하게 한다. -> state 끌어올리기
// 그렇게 공통 컴퍼넌트에서 state 값이 변경됨에 따라 하위 컴퍼넌트에 변경된 state 값을 props로 넘겨주며 동기화시킬 수 있다.


class Calculater extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temperature: '',
            scale: ''
        }

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);

    }

    handleCelsiusChange(temperature) {
        this.setState({
           temperature: temperature,
           scale: 'c'
        });
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            temperature: temperature,
            scale: 'f'
        });
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;


        return(
            <div>
                <TemperatureInput scale = 'c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale = 'f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        );
    }
}
export default Calculater;

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}