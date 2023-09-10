import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { View } from 'react-native';
import Formulario from '../Components/Formulario.js';



class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View className="bg-slate-800 flex-auto flex-row justify-center" >
                <Formulario />
                <StatusBar style='auto' />
            </ View>
        );
    }
}

export default Home;