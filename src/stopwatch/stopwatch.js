import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    // Button,
    FlatList
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CircleButton from './components/circle.button';
import ListRow from './components/list.row';

import {
    startTimer,
    pauseTimer,
    resetTimer,
    lapTimer
} from './actions';

class Stopwatch extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{this.props.title}</Text>
                </View>
                <View style={styles.stopwatchContainer}>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timerText}>
                            {this.props.min}:{this.props.sec}:{this.props.ms}
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.startPauseButton}>
                            <CircleButton 
                                icon='reset' 
                                onPress={this.props.actions.resetTimer}
                                disabled={!this.props.hasStarted}
                            />
                            { !this.props.isStarted ? 
                                <CircleButton 
                                    icon='play'
                                    onPress={this.props.actions.startTimer}
                                />
                            :
                                <CircleButton 
                                    icon='pause'
                                    onPress={this.props.actions.pauseTimer}
                                />
                            }
                            <CircleButton 
                                icon='laps' 
                                onPress={this.props.actions.lapTimer}
                                disabled={!this.props.hasStarted}
                            />
                        </View>
                    </View>
                    <View style={styles.lapsContainer}>
                        <FlatList
                            ref='listRef'
                            data={this.props.laps}
                            renderItem={({ item }) => <Text>{item.value}</Text>}
                            keyExtractor={(item, index) => index}
                        />
                        <ListRow
                            title="ListRowHere"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight
    },
    titleContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleText: {
        fontSize: 30,
        fontFamily: 'Roboto'
    },
    stopwatchContainer: {
        flex: 5
    },
    timeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonsContainer: {
        flex: 3
    },
    timerText: {
        fontSize: 50,
        backgroundColor: 'red',
        fontFamily: 'Roboto'
    },
    lapsContainer: {
        flex: 1
    },
    startPauseButton: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    }
});

// Define which part of the state we're passing to this component
const mapStateToProps = state => ({
    title: state.title,
    ms: state.ms,
    sec: state.sec,
    min: state.min,
    isStarted: state.isStarted,
    laps: state.laps,
    hasStarted: state.hasStarted
});

// Define the actions this component may dispatch
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        startTimer, 
        pauseTimer, 
        resetTimer, 
        lapTimer 
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);
