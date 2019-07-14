import React from 'react';
import {StyleSheet, Text, View,Button,TouchableOpacity,Image,ImageBackground,ActivityIndicator } from 'react-native';
import DetectFace from './Components/DetectFace'
import Quiz from './Components/Quiz'


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isCameraOpen:false,
      isQuizStart:false,
      quizData:[],
      isLoading:true,
      categoryText:0,
      isWallpaper:true,
    };
    this._backCamera=this._backCamera.bind(this);
    this._startTheQuiz=this._startTheQuiz.bind(this);

  }



    componentDidMount(){
      setTimeout(()=>{
        this.setState({isWallpaper:false})
      },3000)
    } 



  _backCamera(isCameraOpen){
    console.log('isCameraOpen=====>',isCameraOpen);
    this.setState({isCameraOpen:isCameraOpen})
  }

  _startTheQuiz(isQuizStart){
    console.log('isQuizStart======>',isQuizStart)
    this.setState({isQuizStart:isQuizStart})
  
  }

  _handleCategoryText(cat){
    console.log(cat);
    this.setState({categoryText:cat,isCameraOpen:true})
  }





  render(){
    const {isCameraOpen,isQuizStart,categoryText,isWallpaper}=this.state;
    // console.log(this.state.categoryText)
    // console.log('rendering quiz data--------->',this.state.quizData)
    if(isWallpaper){
      // return <Image source={require('./assets/b30da6743a707ff361f3f07e7736c2a2.jpg')} style={{width:'100%',height:'100%'}} />
      
      return(
      //  <ImageBackground source={require('./assets/back.jpg')} style={{width: '100%', height: '100%'}}>
      
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{ fontSize:40,fontWeight:'bold',color:'white',backgroundColor:'gray'}}>QUIZ APP </Text>
      <Text  >by Syed Asim Ur Rehman</Text>
      <ActivityIndicator size="large" color="#000000" />
      </View>
      
        // </ImageBackground>
      )
      
    }

    else if(isCameraOpen){
      return <DetectFace _backCamera={this._backCamera} _startTheQuiz={this._startTheQuiz} ></DetectFace> 
    }
    
    else if(isQuizStart && !isCameraOpen){
      return <Quiz categoryText={categoryText} ></Quiz>
    }

    else if(!isCameraOpen && !isQuizStart){
      return (
        <View style={styles.container}>
          <Text style={{fontSize:30,fontWeight:'bold'}} >QUIZ APP</Text>
          {/* <Button title='detect face' onPress={()=>this.setState({isCameraOpen:true})} /> */}


<Text>{'\n'}</Text>
<Text>{'\n'}</Text>
<Text>{'\n'}</Text>


 <Button title="Start Quize" onPress={this._handleCategoryText.bind(this,9)}/>
{/* 
{
          <View style={styles.category}>
            
 <TouchableOpacity style={styles.categoryTouchableOpacity} onPress={this._handleCategoryText.bind(this,9)} >
 <Text style={styles.categoryText}>start quiz</Text>
 </TouchableOpacity>


          </View>
            } */}


        </View>
      );
      }
    
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop:30,
    margin:8,
    // borderWidth:2,
  },
  category:{
    flex: 1,
        flexDirection: 'row',
         //  alignItems: 'center',
        flexWrap:'wrap',
        justifyContent: 'center',
  },
  categoryTouchableOpacity:{
    margin:8,
    alignItems:'center',
  },
  categoryImage:{
    width:70,
    height:70,
    borderRadius:15,
  },
  categoryText:{
    fontSize:10,
    fontWeight:'bold', 
  }

});