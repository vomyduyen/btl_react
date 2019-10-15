import React from 'react';
import { FlatList, ActivityIndicator, TouchableHighlight, Text, View, Image ,ImageBackground} from 'react-native';

export default class VanHoa extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
            ,
            anh: '', tieude: '', noidung: '', theloai: '', thoigian: ''

        }

    }
    static navigationOptions = {
        title: 'Văn Hóa',
      };
    _NoiDung() {
        var arr = this.state.noidung.split('-');
        return arr;
    }
    componentDidMount() {
        return fetch('https://nvtrung96.000webhostapp.com/chitiet.php?id=' + this.props.navigation.getParam("id", 0))
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    anh: responseJson.anh,
                    tieude: responseJson.tieude,
                    noidung: responseJson.noidung,
                    thoigian: responseJson.thoigian,
                    theloai: responseJson.theloai,
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
                <View style={{ flex: 1, padding: 20,marginTop:10,margin:5,backgroundColor:'white' }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={{ flex: 1, paddingTop: 20 , marginTop:10,margin:5,backgroundColor:'white'}}>
               
                <Text style={{fontSize:30}}>{this.state.tieude}</Text>
                <Image source={{ uri: this.state.anh }} style={{ width: 100, height: 100 }} />
                {/* <Text>{this.state.noidung}</Text> */}
                <FlatList
                    data={this._NoiDung()}
                    renderItem={({ item }) => <Text style={{fontSize:20}} >{item}</Text>}
                />
                
            </View>
        );
    }
}

