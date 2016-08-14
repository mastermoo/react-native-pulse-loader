<h1 align="center">Pulse Loader for React Native</h1>
<p align="center">tinder-like loader for your react native app</p>

<p align="center">
  <img src="http://i.giphy.com/l0MYz2cMbOryuyPZu.gif" />
</p>

### Installation
```bash
npm i react-native-pulse-loader --save
```

### Example

```js
import React from 'react';
import PulseLoader from 'react-native-pulse-loader';

class App extends React.Component {
  render() {
    return (
      <PulseLoader
        avatar={'https://scontent-fra3-1.cdninstagram.com/t51.2885-15/e35/11429705_386886401514376_550879228_n.jpg'}
      />
    );
  }
}
```


### API

| Property       | Type          | Default             | Description |
| -------------  |:-------------:|:------------:       | ----------- |
| interval       | number        | 2000                | action buttons visible or not
| size           | number        | 100                 | width and height of the avatar
| pulseMaxSize   | number        | 250                 | maximum size of the pulse in the background
| avatar         | string        | undefined           | **required** avatar url to display
| pressInValue   | number        | 0.8                 | should be between 0 and 1. scale of the avatar, when pressed in
| pressDuration  | number        | 150                 | duration of the scale animation
| pressInEasing  | Easing        | Easing.in           | easing type of the press in animation
| pressOutEasing | Easing        | Easing.out          | easing type of the press out animation
| borderColor    | string        | '#D8335B'           | border color of the pulse
| backgroundColor| string        | '#ED225B55'         | background color of the pulse
| getStyle       | function      | undefined           | override the styling of the pulse. gets as parameter the Animated variable. e.g. (anim) => ({ backgroundColor: 'yellow' })
