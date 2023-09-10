import { useState } from 'react'

export default function useInfoArray() {
    const [info, setInfo] = useState([]);

    const UpdateInfo = () => {
        setInfo([]);
    }

    return { info, setInfo }
}