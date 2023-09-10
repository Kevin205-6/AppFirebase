import { Component, useEffect, useState } from 'react';
import { View } from 'react-native';
import firebase from '../Controllers/ConectionFireBase.js'
import useInfoArray from '../Hooks/useInfoArray.js'
import Info from './Info.js'

function Registro() {
    const db = new firebase();
    let data = [];
    const { info, setInfo } = useInfoArray();

    const setRead = async () => {
        data = await db.GetInfoDataBase();
        setInfo(data)
    }

    setRead();
    setInterval(() => {
        setRead();
    }, 60000);
    return (
        <View className='bg-slate-300 flex-auto my-6 rounded'>
            {
                info.map((item, index) => (
                    <Info key={index} obj={item} />
                ))
            }
        </View>
    );
}

export default Registro;