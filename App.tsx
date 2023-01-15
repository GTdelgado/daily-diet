import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import theme from './src/theme';
import { Loading } from '@components/Loading';

export default function App() {
  const [fonsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />

      {fonsLoaded ?
        <Text>Open up App.tsx to start working on your app!</Text>
        :
        <Loading />}
    </ThemeProvider>
  );
}