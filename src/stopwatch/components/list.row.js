import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class ListRow extends Component {
    static defaultProps = {
        onPress: () => {}, // Do nothing
        type: '',
        title: '',
        time: '',
        elapsedTime: '',
        style: '',
        titleTextStyle: {},
        timeTextStyle: {},
        elapsedTimeTextStyle: {}
    };

    renderRowContent() {
        return (
            <Text>rowcontent</Text>
        );
    }

    render() {
		return (
			<View style={this.props.style ? this.props.style : styles.container}>
                {/* <View 
                    style={[
                        styles.hidden,
                        {
                            height: this.state.hiddenHeight,
                            width: this.state.hiddenWidth,
                        }
                    ]}
                >
                </View> */}
                <Text>1st row</Text>
				{this.renderRowContent()}
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		// As of RN 0.29 flex: 1 is causing all rows to be the same height
		// flex: 1
	},
	hidden: {
		bottom: 0,
		left: 0,
		overflow: 'hidden',
		position: 'absolute',
		right: 0,
		top: 0,
	},
});
