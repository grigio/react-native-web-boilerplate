// used by React Native Expo

// @flow

// import React from 'react';

import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import reducers from './reducers';

import Navigation from './navigation';

const store = createStore(reducers);

const renderApp = () => <Provider store={store}>
  <Navigation />
</Provider>;

// AppRegistry.registerComponent('ReactNavigationExamples', () => renderApp);

/*if (module.hot) {
  // $FlowFixMe
  module.hot.accept();
  const nextReducer = require('./reducers').default; // eslint-disable-line
  store.replaceReducer(nextReducer);

  const renderHotApp = () => <Provider store={store}>
    <Navigation />
  </Provider>;

  AppRegistry.registerComponent('ReactNavigationExamples', () => renderHotApp);
}*/

// AppRegistry.runApplication('ReactNavigationExamples', {
//   rootTag: document.getElementById('root')
// });


//
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, AppLoading } from 'expo';

    // Font.loadAsync({
    //   'MaterialIcons': require('./web/build/MaterialIcons.ttf'),
    // });

export default class App extends React.Component {
  async _loadAssetsAsync() {
    await Font.loadAsync({
      'MaterialIcons': require('./web/build/MaterialIcons.ttf'),
      'Ionicons': require('./web/build/Ionicons.ttf'),
    });
    
    this.setState({appIsReady: true});
  }
  // componentDidMount() {
  //   Font.loadAsync({
  //     'MaterialIcons': require('./web/build/MaterialIcons.ttf'),
  //   });
  // }
  // async componentDidMount() {
  //   await Font.loadAsync({
  //     'MaterialIcons': require('./web/build/MaterialIcons.ttf'),
  //   });

  //   // this.setState({ fontLoaded: true });
  // }

  state = {
      appIsReady: false,
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  render() {
    if (!this.state.appIsReady) {
      return <AppLoading />;
    }
    return (
        <Provider store={store}>
        <Navigation />
        </Provider>
    );
  }
}

// AppRegistry.registerComponent('main', () => App);


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
