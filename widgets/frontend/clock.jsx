import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState({time: new Date()});
  }


    // hours = (hours < 10) ? `0${hours}` : hours;
    // mins = (mins < 10) ? `0${mins}` : mins;
    // seconds = (seconds < 10) ? `0${seconds}` : seconds;

  render() {
    let hours = this.state.time.getHours() % 12;
    let mins = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    hours = (hours < 10) ? `0${hours}` : hours;
    mins = (mins < 10) ? `0${mins}` : mins;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return (
      <div>
        <h1>Clock</h1>
        <div className='clock'>
          <p>
            <span>Time:</span>
            <span> {hours}:{mins}:{seconds} PDT</span>
          </p>
          <p>
            <span>Date:</span>
            <span>{this.state.time.toDateString()}</span>
          </p>
        </div>
      </div>

    );
  }
}
