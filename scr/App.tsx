import 'react-native-gesture-handler';
import { Navigator } from './presentation/navigator/Navigtor';
import { ThemeProvider } from './presentation/context/ThemeContext';



export const App = () => {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
}