import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/Home';
import { ResumeList } from '@screens/ResumeList';
import { NewMeal } from '@screens/NewMeal';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
                name='home'
                component={Home}
            />
            <Screen 
                name='resume'
                component={ResumeList}
            />
            <Screen 
                name='new'
                component={NewMeal}
            />
        </Navigator>
    )
}