import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { CardList } from 'react-native-card-list';

import { MonoText } from '../components/StyledText';
import { statement } from '@babel/template';
import { sendLogoutAction, sendActionDecrement, sendActionIncrement } from './../LoginActions';
import { connect } from 'react-redux';

export class HomeScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  cards = [
    {
      id: "0",
      title: "Starry Night",
      picture: '',
      // picture: <Image
      //   style={{width: 50, height: 50}}
      //   source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>,
      content: <Text>Starry Night</Text>
    },
    {
      id: "1",
      title: "Wheat Field",
      picture: '',
      // picture: <Image
      //   style={{width: 50, height: 50}}
      //   source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>,
      content: <Text>Wheat Field with Cypresses</Text>
    },
    {
      id: "2",
      title: "Bedroom in Arles",
      picture: '',
      // picture: <Image
      //   style={{width: 50, height: 50}}
      //   source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>,
      content: <Text>Bedroom in Arles</Text>
    }
  ]

// export default function HomeScreen() {
  render() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.cardsContainer}>
          <CardList cards={this.cards} />
        </View>

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />

          <Text style={styles.getStartedText}>Get started by opening</Text>

          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            Change this text and your app will automatically reload.  {this.props.username}
          </Text>
        </View>

        <Text style={styles.getStartedText}>
          {this.props.counter}
        </Text>
        <Text style={styles.getStartedText}>
          {this.props.movies[0].name}
        </Text>
      
        <Button
          title="Increment"
          onPress={() => this.props.actionIncrement()}
        />
        <Button
          title="Decrement"
          onPress={() => this.props.actionDecrement()}
        />

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              Help, it didn’t automatically reload!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View>
    </View>
  );
}  
}

HomeScreen.navigationOptions = {
  header: null,
};


// Which parts of the store, should this component subscribe to?
const mapStateToProps = state => {
  const { username, name, counter } = state.login;
  const { movies } = state.movie;
  console.log('mapStateToProps ... state:' + JSON.stringify(state));
  console.log('mapStateToProps ... props:' + JSON.stringify({ username, name, counter }));
  return { username, name, counter, movies };
};

// Which actions should this component be able to send?
// need custom middleware for async func --added thunk in createStore
const mapDispatchToProps = {
  sendLogout: sendLogoutAction, actionIncrement: sendActionIncrement, actionDecrement: sendActionDecrement
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  
  cardsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
