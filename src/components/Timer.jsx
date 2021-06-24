import React from 'react';
import store from '../redux/store';
import { startTimerAction, START_TIMER, STOP_TIMER, TICK } from '../redux/actions';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: 30,
      oneSecond: 1000,
    }
    this.runTimer = this.runTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  componentDidMount() {
    const intervalLength = 1000;
    this.runCountDown = setInterval(() => this.runtimer(), intervalLength)
  }

  componentWillUnmount(){
    this.stopTimer();
  }

  runTimer() {
    const { time } = this.state;
    if (time !== 0) {
      store.dispatch({
        type: START_TIMER,
        start_time: time,
      })
      startTimerAction();
    }
  }

  stopTimer() {
    clearInterval(this.runCountDown);
  }

  tick() {
    store.dispatch({
      type: TICK,
    })
    
    if (this.props.store.seconds <= 0) {
      clearInterval(this.interval);
      store.dispatch({
        type: STOP_TIMER
      });
    }
  }
  
  startTimer() {
    const { oneSecond } = this.state;
    this.interval = setInterval(this.tick, oneSecond);
  }

  render() {
    return (
      <div>
        Timer
      </div>
    )
  }

}

export default Timer;
