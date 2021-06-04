import React from 'react'
import { Image,View, Text,ScrollView ,Dimensions} from 'react-native'

const {width}= Dimensions.get("window");
const height = width * .6

 const images=[
     'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?cs=srgb&dl=pexels-pixabay-40568.jpg&fm=jpg',
     'https://images.pexels.com/photos/4210606/pexels-photo-4210606.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
     'https://images.pexels.com/photos/4210561/pexels-photo-4210561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
 ]

const Slider = () => {
   
  return (
    <View style={{marginTop:50}}>
      <ScrollView 
      pagingEnabled 
      horizontal 
      showHorizontalScrollIndicator={false}
      style={{width,height}}>
      {
          images.map((image,index)=>(
              <Image 
      source={{uri:image}}
      style={{height, width,resizeMode:'cover'}}/>
          ))
      }
      </ScrollView>
      <View style={{flexDirection:'row',position:'absolute', bottom:0,alignSelf:'center'}}>
      <Text>⬤</Text>
      </View>
      
    </View>
  )
}
export default Slider