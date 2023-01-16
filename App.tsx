import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import theme from './src/theme';
import { Loading } from '@components/Loading';
import { Routes } from './src/routes';

export default function App() {
  const [fonsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='dark' />

      {fonsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}