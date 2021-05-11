import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import pic from '../../assets/favicon.png';

class Pokemone extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            
            data:[],
            limit:20,
            offset:0,
        
        }
    }

    componentDidMount()
    {
        fetch(`https://pokeapi.co/api/v2/pokemon/`).
            then((res)=>res.json()).
                then((data)=>{
                    this.setState({ data : this.state.data.concat(data.results)})     
            })
    }

    renderItem = ({item})=> {
        return(
            <View style={styles.container}>

            <View style={{ flex:1, alignItems:'center'}}> 
            <Image source={pic} style={{height:70,width:70 }}/>
            </View>

            <Text style={{fontSize:20,fontStyle:"Bold" , textAlign:'center'}}>{item.name}</Text>
           
            </View>
        )
     }


     onEnd = ({ distanceFromEnd }) => {
        this.setState({
            offset:this.state.offset+20
        },()=>{
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.state.limit}&offset=${this.state.offset}`).
            then((res)=>
            res.json())
            .then((resp)=>{
                this.setState({ data : this.state.data.concat(resp.results)})
                })
            })
        }


    render()
    {
        return(
            <View style={{backgroundColor:'#e6ecff'}}>
               <FlatList 
                data={this.state.data} 
                numColumns={2}
                renderItem={ this.renderItem}
                onEndReached= { this.onEnd}
                
                />             
            </View>
        )
    }
}
export default Pokemone;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        margin:10,
        padding:10,
        backgroundColor:'#b3c6ff',
        height:150,
        shadowColor: 'rgb(0, 0, 0)',
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 15,
        borderBottomColor:'#8080ff',
        borderRadius:10,
    }
  });