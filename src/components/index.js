import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login'
const MainNav = createStackNavigator(
{
    Login: {
        screen: Login,
        navigationOpitions: {
            header: null
        }
    }
}
)

export default createAppContainer(MainNav);
