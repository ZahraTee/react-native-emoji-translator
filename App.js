import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

var translate = require('moji-translate');

export default class App extends React.Component {

  state = {
    translation: "...And emoji will appear here ✨"
  }

  translate(text){
    translation = translate.translate(text, false);
    this.setState({translation: translation});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Millenial Talk</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.translate(text)}
          multiline={true}
          placeholder={"Get started by typing something..."}
        ></TextInput>
        <Text style={styles.input}>
          {this.state.translation}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  heading: {
    backgroundColor: '#ff0099',
    color: 'white',
    fontSize: 24,
    padding: 10,
    marginTop: 20,
    width: '100%',
    textAlign: 'center'
  },
  input: {
    flex: 1,
    margin: 10,
    fontSize: 20,
    borderColor: '#ff0099',
    borderWidth: 2,
    padding: 10
  }
});
