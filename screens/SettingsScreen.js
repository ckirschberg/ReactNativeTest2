import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { connect } from 'react-redux';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  View,
  Button
} from 'react-native';


export class SettingsScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

   render() {
     return (
      <SafeAreaView style={styles.container}>
          <Text>{this.props.user.name}'s favorite movies</Text>
          <FlatList
            data={this.props.favoriteMovies}
            renderItem={({ item }) => <Item props={this.props} item={item} />}
            keyExtractor={item => item.id}
          />
      </SafeAreaView>
     );
   }
}

function Item({ props, item }) {
  return (
    <View style={styles.item}>
      <Image
          style={{width: 50, height: 50}}
          source={{uri: item.imageUrl}}
        />
      <Text style={styles.title}>{item.title}</Text>
      <Button
          title="Add to my favorites"
          onPress={() => props.addToFavoriteMovies(item)}
        />
    </View>
  );
}


SettingsScreen.navigationOptions = {
  title: 'app.json',
};

// Which parts of the store, should this component subscribe to?
const mapStateToProps = state => {
  const { user, favoriteMovies } = state.movie;
  return { user, favoriteMovies };
};

// Which actions should this component be able to send?
// need custom middleware for async func --added thunk in createStore
const mapDispatchToProps = {
  // sendLogout: sendLogoutAction, actionIncrement: sendActionIncrement, actionDecrement: sendActionDecrement
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
