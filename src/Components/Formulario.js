import { View, Text, TextInput, Button } from 'react-native'
import Registros from './Registros.js';
import firebase from '../Controllers/ConectionFireBase.js'
import useObject from '../Hooks/useObjet.js'

function Formulario() {

    const { data, setData, handleDeleteData, apellido, setApellido, handleDeleteApellido } = useObject();
    const db = new firebase();
    const cleanData = () => {
        handleDeleteApellido();
        handleDeleteData();
    }
    return (
        <View className="w-3/4 flex-col justify-center h-full">

            <Text className='text-slate-100 my-0.5 font-bold'>
                Ingresa tu nombre:
            </Text>
            <TextInput className='bg-slate-300 w-full rounded my-0.5'
                value={data}
                onChangeText={setData}
            />
            <Text className='text-slate-100 my-0.5 font-bold'>
                Ingresa tus apellidos:
            </Text>
            <TextInput className='bg-slate-300 w-full my-0.5 rounded'
                value={apellido}
                onChangeText={setApellido}
            />
            <Button
                title='Hola'
                className='rounded-s-3xl my-2'
                onPress={() => {
                    const obj = { nombre: data, apellido: apellido };
                    db.InsertValueDatabase('person', obj);
                    cleanData();
                }}
            />
            <Registros />
        </View>
    );
}

export default Formulario;