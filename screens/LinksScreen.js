import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

// import { ExpoLinksView } from '@expo/samples';
import { sendLogoutAction, sendActionDecrement, sendActionIncrement } from './../LoginActions';
import { connect } from 'react-redux';
import { actionAddToFavoriteMovies } from './../MovieActions';

export class LinksScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <ScrollView style={styles.container}>
          
          {this.props.movies.map((employee) => (
            <View style={styles.employeeWrapper} key={employee.id}>
              <Text style={styles.textCenter}>Employee_id : {employee.id}</Text>
              <Text style={styles.textCenter}>Employee Name : {employee.employee_name}</Text>
              <Text style={styles.textCenter}>Employee Salary : {employee.employee_salary}</Text>
              <Text style={styles.textCenter}>Employee Age : {employee.employee_age}</Text>
            </View>
          ))} 
          
          {/* <FlatList
            data={this.props.movies}
            renderItem={({ item }) => <Item props={this.props} item={item} />}
            keyExtractor={item => item.id}
          /> */}
        </ScrollView>
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


// Which parts of the store, should this component subscribe to?
const mapStateToProps = state => {
  const { user, favoriteMovies, movies } = state.movie;
  console.log('mapStateToProps ... state:' + JSON.stringify(state));
  console.log('mapStateToProps ... props:' + JSON.stringify({ user, favoriteMovies, movies }));
  return { user, favoriteMovies, movies };
};

// Which actions should this component be able to send?
// need custom middleware for async func --added thunk in createStore
const mapDispatchToProps = {
  addToFavoriteMovies: actionAddToFavoriteMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen);




LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center'
  },
  employeeWrapper: {
    padding: 10,
    borderBottomWidth: 1
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
