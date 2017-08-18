import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Share } from 'react-native';

var translate = require('moji-translate');

export default class App extends React.Component {

  state = {
    emojiOnly: false,
    emojiOnlyText: "Emoji Only",
    translation: "...And emoji will appear here ✨",
  }

  shareTranslation = () => {
    Share.share({
      message: this.state.translation,
      title: "Your Emoji translation"
    })
  }

  translate = (text) => {
    translation = translate.translate(text, this.state.emojiOnly);
    this.setState({translation: translation});
  }

  toggleEmojiOnly = () => {
    this.setState({
      emojiOnly: !this.state.emojiOnly,
      emojiOnlyText: this.state.emojiOnly? "Text + Emoji" : "Emoji Only",
      translation: this.translate(this.state.translation, this.state.emojiOnly)
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Millennial Talk</Text>
        <View style={styles.options}>
          <Button style={styles.optionButton}
                  onPress={this.toggleEmojiOnly}
                  title={this.state.emojiOnlyText} />
          <Button style={styles.optionButton} onPress={this.shareTranslation} title={"Share"}/>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.translate(text)}
          multiline={true}
          placeholder="Get started by typing something..."
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
    backgroundColor: '#CC333F',
    color: 'white',
    fontSize: 24,
    padding: 10,
    paddingTop: 24,
    width: '100%',
    textAlign: 'center'
  },
  input: {
    flex: 1,
    margin: 10,
    marginTop: 0,
    fontSize: 20,
    borderColor: '#EDC951',
    borderWidth: 2,
    padding: 10
  },
  options: {
    flexDirection: 'row',
    backgroundColor: '#EB6841',
    marginBottom: 10
  },
  optionButton: {
    color: 'white'
  }
});
