import React, { Component } from 'react';
import Button from 'react-native-button'
import {  View, Text, Platform, Image, Alert} from 'react-native';


export default class CounterComponent extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: Platform.OS === 'ios' ? 34 : 0
        }}
      >
        <Text
          style={{
            margin: 20,
            fontWeight: 'bold',
            color: 'forestgreen',
            fontSize: 20
          }}
        > Counter </Text>
        <View
          style={{
            height: 50,
            margin: 10,
            flexDirection: 'row'
          }}
        >
          <Button
            containerStyle={{
              padding: 10,
              height: 45,
              borderRadius: 10,
              backgroundColor: 'darkviolet',
            }}
            style={{
              fontSize: 18,
              color: '#fff'
            }}
            onPress={
              () => this.props.onDecrement(1)
            }
          >
            Decrement -
          </Button>
          <Button
            containerStyle={{
              padding: 10,
              height: 45,
              borderRadius: 10,
              backgroundColor: 'darkviolet',
            }}
            style={{
              fontSize: 18,
              color: '#fff'
            }}
            onPress={
              () => this.props.onIncrement(1)
            }
          >
            Increment +
          </Button>
          <Text
            style={{
              margin: 10,
              fontWeight: 'bold',
              color: 'darkblue',
              fontSize: 17
            }}
          >
            Count: {this.props.times}
          </Text>
        </View>
      </View>
    );
  }
}
