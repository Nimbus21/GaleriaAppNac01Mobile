import React from 'react'
import{
  Image,
  View,
  Button,
  Text,
  StyleSheet
} from 'react-native'
import imgp0 from './nac01-imagens/p0.png'
import imgp1 from './nac01-imagens/p1.png'
import imgp2 from './nac01-imagens/p2.png'
import imgp3 from './nac01-imagens/p3.png'
import imgp4 from './nac01-imagens/p4.png'
import imgp5 from './nac01-imagens/p5.png'
import imgp6 from './nac01-imagens/p6.png'

const arrayFotos = [imgp0, imgp1, imgp2, imgp3, imgp4, imgp5, imgp6]

let contador = 0;

export default class App extends React.Component {

  constructor(propriedades){
    super(propriedades);
    this.state = {
      imageAtual: arrayFotos[0],
      contador: 0
    };
  }

  proxima () {

    if (contador == arrayFotos.length - 1) {
      contador = -1;
    }

    if (contador < arrayFotos.length - 1) {
      contador++;
    }

    this.setState({
      imageAtual: arrayFotos[contador]
    });
  }

  anterior () {

    if (contador == 0) {
      contador = arrayFotos.length;
    }

     contador--;

    this.setState({
      imageAtual: arrayFotos[contador]
    });
  }

  render(){
    let { imageAtual } = this.state;
    return (
      <View style = {styleMain.container}>
        <View style ={styleMain.barra}>
          <Text style = {styleMain.texto}>Galeria de Fotos</Text>
        </View>
        <View style={{ padding : 16}}>
          <Image
          source={ imageAtual }
          style={{ alignSelf : 'center', height : 200, width : 200}}
          />
        </View>
        <View>
          <View style={{padding: 3}}>
            <Button 
            onPress={ _ => this.anterior()}
            title="Imagem anterior"
            color = 'rgb(77, 181, 174)'
            />
          </View>
          <View style={{padding: 3}}>
            <Button 
            onPress={ _ => this.proxima()}
            title="Próxima imagem"
            color = 'rgb(77, 181, 174)'
            />
          </View>
        </View>
      </View>
    )
  }
}

const styleMain = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(254, 212, 74)',
    width: '100%'
  },
  barra: {
    backgroundColor: 'rgb(1, 134, 117)', 
    height: 50, 
    width: '100%'
  },
  texto: {
    color: 'white', 
    textAlign: 'center', 
    fontSize: 20
  }
});