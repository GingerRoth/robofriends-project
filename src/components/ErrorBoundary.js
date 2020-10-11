import { render } from '@testing-library/react';
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
}

componentDidCatch(error, info) {
    this.setState({ hasError:  true })
}

render() {
    if(this.state.hasError) {
        return <h1> Thats an Error for you! not good, enjou debugging!</h1>
    }
}

export default ErrorBoundary;