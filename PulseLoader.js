import React from 'react';
import { View, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import Pulse from './Pulse';
import { observer } from "mobx-react/native";
import { observable } from 'mobx';

@observer
export default class LocationPulseLoader extends React.Component {
  @observable circles = [];

  constructor(props) {
    super(props);

    this.counter = 1;
    this.setInterval = null;
    this.anim = new Animated.Value(1);
    this.addCircle = this.addCircle.bind(this);
    this.setCircleInterval = this.setCircleInterval.bind(this);
  }

  componentDidMount() {
    this.setCircleInterval();
  }

  setCircleInterval() {
    this.setInterval = setInterval(this.addCircle, this.props.interval);
    this.addCircle();
  }

  addCircle() {
    this.circles = [...this.circles, this.counter];
    this.counter++;
  }

  onPressIn = () => {
    Animated.timing(this.anim, {
      toValue: this.props.pressInValue,
      duration: this.props.pressDuration,
      easing: this.props.pressInEasing,
    }).start(() => clearInterval(this.setInterval));
  }

  onPressOut = () => {
    Animated.timing(this.anim, {
      toValue: 1,
      duration: this.props.pressDuration,
      easing: this.props.pressOutEasing,
    }).start(this.setCircleInterval);
  }

  render() {
    const { size, avatar, avatarBackgroundColor, interval } = this.props;

    return (
      <View style={{
				flex: 1,
				backgroundColor: 'transparent',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
        {this.circles.map((circle) => (
          <Pulse
            key={circle}
            {...this.props}
          />
        ))}

        <TouchableOpacity
          activeOpacity={1}
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
          style={{
						transform: [{
							scale: this.anim
						}]
					}}
        >
          <Image
            source={this.props.source}
            style={{
							width: size,
							height: size,
							borderRadius: size/2,
							backgroundColor: avatarBackgroundColor
						}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

LocationPulseLoader.propTypes = {
  interval: React.PropTypes.number,
  size: React.PropTypes.number,
  pulseMaxSize: React.PropTypes.number,
  source: Image.propTypes.source.isRequired,
  avatarBackgroundColor: React.PropTypes.string,
  pressInValue: React.PropTypes.number,
  pressDuration: React.PropTypes.number,
  borderColor: React.PropTypes.string,
  backgroundColor: React.PropTypes.string,
  getStyle: React.PropTypes.func,
};

LocationPulseLoader.defaultProps = {
  interval: 2000,
  size: 100,
  pulseMaxSize: 250,
  avatar: undefined,
  avatarBackgroundColor: 'white',
  pressInValue: 0.8,
  pressDuration: 150,
  pressInEasing: Easing.in,
  pressOutEasing: Easing.in,
  borderColor: '#D8335B',
  backgroundColor: '#ED225B55',
  getStyle: undefined,
};
