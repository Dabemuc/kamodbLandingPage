import React, { useEffect, useState } from "react";
import getThemes from "../Api/Api";

interface Prop {
    onThemeChange: Function
}

export default function ThemeChanger(props: Prop){

    const [themesList, setThemesList] = useState([])

    useEffect(() => {
        getThemes().then(
            data => {
                setThemesList(data.themes)
                console.log(data.themes)
            }
        )
    }, [])


    return (
        <div>
        <select title="Change theme" className="theme_changer" onChange={(e) => {props.onThemeChange(e.target.value)}}>
            {themesList.map((theme: any, index: number) => {
                return <option key={index} value={theme.path}>{theme.key}</option>
            })}
        </select>
        </div>
    )

}