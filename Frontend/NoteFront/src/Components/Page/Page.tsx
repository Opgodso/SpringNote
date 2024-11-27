import React,{useEffect, useState} from "react";
import axios from "axios";
import { Note } from "../../Types";



const EditorNote:React.FC = () =>{
    const [note, setNote] = useState<Note>({
        userid : 1,
        username: "無名氏",
        title: "無標題",
        content: ""
    });

    const [isSaved, setIsSaved] = useState<boolean>(false);

    useEffect(()=>{
        const saveInterval = setInterval(()=>{
            if(!isSaved){
                saveNote();
            }
        },5000);
    })

}