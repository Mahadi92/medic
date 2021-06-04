import React from 'react'
import { Image,View, Text,ScrollView ,Dimensions} from 'react-native'

const Catagorey = () =>{
    return(
        <View>
        <ScrollView horizontal>
        <Text style={{style}}>Catagorey 1</Text>
        <Text>Catagorey 2</Text>
        <Text>Catagorey 3</Text>
        </ScrollView>
        </View>
    )
}

export default Catagorey ;

const style = {
   margin:2
}