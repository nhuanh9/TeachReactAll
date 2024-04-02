import {Component} from "react";

class CComponent extends Component {
    constructor() {
        super();
        this.state = {
            x: 10
        }
    }

    componentDidMount() {
        console.log(2)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(3)
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(4)
    }

    componentWillUnmount() {
        console.log(5)
    }


    render() {
        return (
            <>
                <h1>
                    Classsss Component {this.state.x}
                </h1>
                {console.log(1)}
                <button onClick={() => {
                    this.setState(state => {
                        return {
                            x: state.x+1
                        }
                    })
                }}>X++
                </button>
            </>
        )
    }
}

export default CComponent;