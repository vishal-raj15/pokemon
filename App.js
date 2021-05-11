import React, { useState } from "react";
import { View, Switch, StyleSheet ,Text,Linking } from "react-native";
import Pokemon from './src/components/pokemon';
import Pokemone from './src/components/pokemone';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [ load1 ,setload1] = useState(false);
  const [ load2 ,setload2] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>

        <View style={styles.header}>

      <Text style={[{flex:1,flexDirection:'row' ,paddingLeft:20 ,color:'white' }]}> Comfortable </Text>
      
      <Switch

        style={[{flexDirection: "row"  ,flex:1}]}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
       
      />
      
       <Text style={[{flexDirection: "row" ,flex:1 ,paddingLeft:50 , color:'white'}]}> Compact </Text>
       </View>


  {isEnabled ? 
  
     <Pokemon /> : 
    
    <Pokemone /> }
       
    </View>
  );
}

const styles = StyleSheet.create({


  header:{

    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop:50,
    alignItems:'center',
    height:40,
    paddingBottom:40,

  },
  container:{
      backgroundColor:'#4d79ff',
  }

});

export default App;