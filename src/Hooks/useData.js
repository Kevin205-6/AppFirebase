import { useState } from 'react';

function useData() {
    const [data, setData] = useState('');


    const handleDeleteData = () => {
        setData('');
    }

    return {
        data, setData, handleDeleteData
    };
}

export default useData;
