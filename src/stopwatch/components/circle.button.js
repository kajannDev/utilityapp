import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

class CircleButton extends Component {
    static defaultProps = {
        onPress: () => {}, // Do nothing
        type: '',
        text: 'Click Here',
        size: 'medium',
        disabled: false,
        fullWidth: false,
        halfWidth: false,
        icon: null,
        iconSize: null,
        iconHeight: null,
        iconWidth: null,
        buttonStyle: {},
        textStyle: {},
        textCenter: true
    };

    renderIcon = (icon, disabled) => {
        const color = disabled ? 'grey' : 'blue';
        if (icon === 'play') {
            return (
                <MaterialIcons name="play-arrow" size={32} color={color} />
            );
        } else if (icon === 'pause') {
            return (
                <MaterialIcons name="pause" size={32} color={color} />
            );
        } else if (icon === 'stop') {
            return (
                <MaterialIcons name="stop" size={32} color={color} />
            );
        } else if (icon === 'reset') {
            return (
                <MaterialIcons name="refresh" size={32} color={color} />
            );
        } else if (icon === 'laps') {
            return (
                <Entypo name="stopwatch" size={32} color={color} />
            );
        } 
    };

    render() {
        const {
            onPress,
            disabled,
            icon
        } = this.props;

        return (
            <TouchableOpacity
                style={styles.container}
                onPress={onPress}
                disabled={disabled}
            >
                {this.renderIcon(icon, disabled)}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 100,
    },
});

export default CircleButton;
