import { atom, useRecoilValue } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist()

export const currentMenuState = atom({
    key: 'currentMenuItem',
    default: '',
    effects_UNSTABLE: [persistAtom]
})