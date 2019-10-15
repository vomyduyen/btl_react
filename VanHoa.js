import React from 'react';
import { FlatList, ActivityIndicator,TouchableHighlight, Text, View, Image } from 'react-native';

import ChiTiet from './ChiTiet';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
class VanHoa extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  static navigationOptions = {
    title: 'Văn Hóa - Đời Sống',
  };
  componentDidMount() {
    return fetch('https://nvtrung96.000webhostapp.com/select_truyencuoi.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20,margin:5,marginTop:10,backgroundColor:'#CCFFCC' }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20,marginTop:10,margin:5,backgroundColor:'#CCFFCC' }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <TouchableHighlight onPress={()=>this.props.navigation.navigate("ChiTiet",{id:item.id})}>
              <View style={{ flexDirection: 'row' ,marginTop:10}}>
                <Image source={{ uri: item.anh }} style={{ width: 100, height: 100 }} />
                <Text style={{marginLeft:10,fontSize:22, width:310,height:100}} >{item.tieude}</Text>

              </View>
            </TouchableHighlight>
          }
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}
const AppVanHoa =createStackNavigator({
  VanHoa:{
    screen:VanHoa
  },
  ChiTiet:{
    screen:ChiTiet
  }
})

export default createAppContainer(AppVanHoa);
