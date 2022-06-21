import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: 30,
        justifyContent:'center',
        
    },
    texto:{
        paddingHorizontal:20,
        paddingVertical:10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        alignItems:'center'
    },
    img:{
        width:350,
        height: 250,
        borderTopRightRadius: 30,
        borderTopLeftRadius:30,
        marginBottom:5,
        marginTop:'center'
    },
    card:{
        backgroundColor:'#848484',
        borderRadius: 30,
        width:350
    }
    });

export default styles;