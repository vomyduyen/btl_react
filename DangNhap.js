
import React, { Component } from 'react';
import {
    View, Image,
    Text, Button, TextInput, TouchableOpacity,ImageBackground
} from 'react-native';
export default class DangNhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dangky: false,
        }
    }
    static navigationOptions = {
        title: 'Dang nhap',
      };
    render() {
        if (this.state.dangky == false) {
            return (
                <View style={{ height: 700 }}>
               
                <ImageBackground source={require('./image/anhbg.jpg')} style={{width:'100%',height:'100%'}}>
                    <Image source={require('./image/anh.jpg')} style={{ height: 170, width: 160, marginLeft: 125, marginTop: 150 }}></Image>
                    <View style={{ margin: 20 }}>
                        <TextInput placeholder='usename' style={{ backgroundColor: '#ECE0F8', }}
                            onChangeText={user => this.setState({ user })}
                        ></TextInput>
                        <TextInput placeholder="password" secureTextEntry={true} style={{ backgroundColor: '#ECE0F8',  marginTop: 5 }}
                            onChangeText={pass => this.setState({ pass })}
                        ></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 95 }}>
                        <Button style={{ marginLeft: 20 }} title="đăng nhập" onPress={() => this.props.navigation.navigate('ViewItem')} ></Button>

                   <View style={{width:80,height:35,backgroundColor:'blue', marginLeft:20}}>
                       
                    <TouchableOpacity onPress={() => this.setState({ dangky: true })}>
                        <Text style={{marginTop:6,textAlign:"center"}}>ĐĂNG KÝ</Text>
                    </TouchableOpacity>
               
                    </View>
                     </View>
                     </ImageBackground>
                 
                </View>
                
            );
        } else {
            return (
                <View style={{  height: 700 }}>
                     <ImageBackground source={require('./image/anhbg.jpg')} style={{width:'100%',height:'100%'}}>
                    <Image source={require('./image/anh.jpg')} style={{ height: 170, width: 160, marginLeft: 125, marginTop: 150 }}></Image>
                    <View style={{ margin: 20 }}>
                        <TextInput placeholder='usename' style={{ backgroundColor: '#ECE0F8', }}

                        ></TextInput>
                        <TextInput placeholder='Ho ten' style={{ backgroundColor: '#ECE0F8',marginTop:5 }}

                        ></TextInput>
                        <TextInput placeholder="password" secureTextEntry={true} style={{ backgroundColor: '#ECE0F8', marginTop: 5 }}
                            onChangeText={pass => this.setState({ pass })}
                        ></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 160 }}>
                        <Button style={{ marginLeft: 20,textsize:30 }} title="Dang ky" onPress={() => this.setState({ dangky: false })} ></Button>

                 
                        {/* <View style={{width:80,height:35,backgroundColor:'blue', marginLeft:20}}>
                       
                    <TouchableOpacity onPress={() => this.setState({ dangky: true })}>
                    <Text style={{marginTop:6, textAlign:"center"}}>ĐĂNG KÝ</Text>
                    </TouchableOpacity>
                
                    </View> */}
                    </View>
                </ImageBackground>
                </View>
            );
        }
    }
}




