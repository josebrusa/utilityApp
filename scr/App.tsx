import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/navigator/Navigtor';




export const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}