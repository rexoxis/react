import React, {Component} from "react";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : false,
            result : ""
        };
    }

    loginCheck = async () => {

        axios.post('/login', {
                data : {
                    userid : this.props.userid,
                    passwd : this.props.passwd
                }
            })
            .then(({data}) => {
                this.setState({
                    loading: true,
                    result: data,
                });
                console.log("login result : " + data);
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };

    componentDidMount() {
        this.loginCheck();
    }

    render() {
        const result = this.state.result;
        return (
            <>
                {result}
            </>
        );
    }
}
export default Login;