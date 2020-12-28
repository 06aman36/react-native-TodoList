import * as React from 'react';
import { View, Text, Button, ImageBackground,
   Image, ScrollView ,BackHandler} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from './src/Screens/HomeScreen'
import TodoListView from './src/Screens/TodoListView';
import { Mainbg, Atlas, mypic } from './src/constants/Image'
import { List, ListItem } from 'native-base';

function CustomDrawerContent(props) {
  return (
    <ImageBackground source={Atlas}
      style={{ resizeMode: 'cover', height: '100%' }}>
      <View style={{ flex: 1 }}>
        
        <ScrollView>

          <View style={{ height: 350, alignItems: 'center', top: 30, borderWidth: 0, margin: 5 }}>
            <List>

              <ListItem onPress={() => props.navigation.navigate('HomeScreen')}>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>Home</Text>
              </ListItem>

              <ListItem onPress={() => props.navigation.navigate('TodoList')}>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>TodoListView</Text>
              </ListItem>
            </List>
          </View>
        </ScrollView>
        <List style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
          <ListItem >
            <Text style={{ fontWeight: 'bold', color: 'purple' }}>Version 0.0.1</Text>
          </ListItem>
          <ListItem onPress={() => BackHandler.exitApp()}>
            <Text style={{ fontWeight: 'bold', color: '#c5001c' }}>Logout</Text>
          </ListItem>
        </List>

      </View>


    </ImageBackground>
   
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="TodoList" component={TodoListView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
