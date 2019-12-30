import React from 'react';
import { Keyboard } from 'react-native';

//To remove/add some components we listen keyboard show/hide events
export default class KeyboardDisplay extends React.Component {

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = () => {
        const { keyboardShow } = this.props;
        keyboardShow();
    }

    _keyboardDidHide = () => {
        const { keyboardHide } = this.props;
        keyboardHide();
    }

    render() {
        return <></>;
    }
}