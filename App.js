import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component {
  render(){
    let nomeTmj = 'Tamo Junto';
  return (
    <View style={styles.container}>
      <Text>Primeiro App!</Text>
      <Text>By Leonardo do Carmo da Silveira Costa 11/02/1980</Text>
      <Text style={{ color:'red', fontSize: 25, margin:30 }}>
      Estamos Evoluindo !!! 
      </Text>
      <Text style={{fontSize:45}}>
        {nomeTmj}
      </Text>
      <LCostaImg largura={500} altura={300} nome='Leonardo Costa' ></LCostaImg>
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

class LCostaImg extends Component{
  render(){
    let img = 'http://cito.saude.ws/perfil.jpg';
    return(
      <View style={styles.container}>
        <Image 
        source = {{ uri: img}}
        style = {{ width:this.props.largura, height:this.props.altura }}
        >
        </Image>
        <Text>{this.props.nome}</Text>
      </View>
    );
  }
}

