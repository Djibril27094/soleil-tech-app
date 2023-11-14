import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview'

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://soleil-tech.web.app/' }} // Remplacez par l'URL de la page web que vous souhaitez afficher
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
