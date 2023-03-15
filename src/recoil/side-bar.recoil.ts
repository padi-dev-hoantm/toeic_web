import { useEffect, useState } from "react";
import { atom, useRecoilValue } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist()

export const currentMenuItemState = atom({
    key: 'currentMenuItem',
    default: '',
    effects_UNSTABLE: [persistAtom]
})

export function useCurrentMenuItemState(){
    const [isInitial, setIsInitial] = useState(true);
    const currentMenuItem = useRecoilValue(currentMenuItemState);

    useEffect(()=>{
        setIsInitial(false)
    },[])

    return isInitial ? '' : currentMenuItem;
}