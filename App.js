import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ChuyenNganh from './ChuyenNganh';
import VanHoa from './VanHoa';
import DangNhap from './DangNhap';
  
const AppNavigatorTab = createBottomTabNavigator({

  VanHoa: {
    screen: VanHoa,
    navigationOptions:{
      title:'Văn Hóa'
    }
  },
  ChuyenNganh: {
    screen: ChuyenNganh,
    navigationOptions:{
      title:'Chuyên Ngành'
    }
  },
  DangNhap: {
    screen: DangNhap,
    navigationOptions:{
      title:'Đăng Nhập'
    },
  },
  
},
{
  tabBarOptions :{
    activeTintColor:'#e91e63',
    labelStyle:{
      fontSize: 20,
      textAlign:'center',
      marginBottom:10,
    },
    style:{
      backgroundColor: '#00FF99',
    },
  }
}


);
export default createAppContainer(AppNavigatorTab);