import { useState } from 'react';
import useData from './useData.js'

function useObject() {
    const nombre = useData();
    const { data, setData, handleDeleteData } = useData();
    const [apellido, setApellido] = useState('');


    const handleDeleteApellido = () => {
        setApellido('');
    }


    return { data, setData, handleDeleteData, apellido, setApellido, handleDeleteApellido };
}

export default useObject;