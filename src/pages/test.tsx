import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import ProfileMeView from "@/view/ProfileMeView";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import axios from "axios";

const Test = () => {
    const [text, setText] = useState("")
    const [value, setValue] = useState("")
    const encodedParams = new URLSearchParams();
    encodedParams.set('q', 'English is hard, but detectably so');


    const handleTranslate = () => {
        const options = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '7e4c2ae9e5mshde33bce68fca244p1cd3e9jsn20bb35822614',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            data: encodedParams,
        };
        axios.request(options).then(function (response: any) {
            setValue(response.data[0])
        })
    }
    return (
        <div>
            <input type="text" name="" id="" onChange={(e) => setText(e.target.value)} />
            <button onClick={handleTranslate}>Dich</button>
            <p>{value}</p>
        </div>
    );
};

export default Test;
