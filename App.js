import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Image,
  Button 
} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    }) 
  }

  render() {
    const placeOutput = this.state.places.map((place, i) => (
    <ListItem key={i} placeName={place} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
          value={this.state.placeholder} 
          onChangeText={this.placeNameChangedHandler}
          placeholder="Aleko App"
          style={styles.placeInput}
          />

          <Button
            title="Press me"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>

        <Image
          style={{width: '100%', height: 300}}
          source={{uri: 'https://images.unsplash.com/photo-1584995376041-a8d613454d73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}}
        />

        <View>{placeOutput}</View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
