import { HomeScreen } from '../screens/home/HomeScreen';
import { SecondScreen } from '../screens/home/SecondScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
export const Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='SecondScreen' component={SecondScreen} />
        </Stack.Navigator>
    );
}