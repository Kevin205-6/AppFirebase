import { Component } from 'react';
import { View, Text } from 'react-native'

class Info extends Component {
    constructor(props) {
        super(props)
        this.obj = this.props.obj;
    }

    render() {
        return (
            <View className="m-2 bg-slate-500 rounded h-12 p-0.5">
                <Text className="text-slate-200">
                    <Text className="font-bold">Nombre: </Text >
                    {this.obj.nombre}
                </Text>
                <Text className="text-slate-200">
                    <Text className="font-bold">Apellido: </Text>
                    {this.obj.apellido}
                </Text>
            </View>
        );
    }
}

export default Info;