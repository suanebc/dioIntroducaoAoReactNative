import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imagemGithub =
  'https://avatars.githubusercontent.com/u/60412898?s=400&u=a2fabc5066c95c102c8cfb43381700925e0e8ad4&v=4';

const urlToMyGithub = 'https://github.com/suanebc';

const App = () => {

  const handlePressGoToGithub = async () => {
    console.log('verifica link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      console.log('Link aprovado');
      console.log('link abrindo...');
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="rosto de Suane"
          style={style.avatar}
          source={{uri: imagemGithub}}
        />
        <Text
          accessibilityLabel="Nome Suane Bittencourt de Camargo"
          style={[style.defaultText, style.name]}>
          Suane Bittencourt de Camargo
        </Text>
        <Text
          accessibilityLabel="Nickname suanebc"
          style={[style.defaultText, style.nickaname]}>
          suanebc
        </Text>
        <Text
          accessibilityLabel="Descrição: Estudante de tecnologia | Desenvolvedora front-end em progresso "
          style={[style.defaultText, style.discription]}>
          Estudante de tecnologia | Desenvolvedora front-end em progresso
        </Text>
        
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1, // Expande para a tela inteira
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  nickaname: {
    fontSize: 18,
    colorDarkFontGithub,
  },
  discription: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
