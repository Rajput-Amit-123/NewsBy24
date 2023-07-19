import { useState } from "react";
import {RingLoader} from "react-spinners";
import React from 'react'

export default function () {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    
    return (
        <div className="sweet-loading" style={{margin:"2rem"}}>
            <center>
                <RingLoader
                    color="#36d7b7"
                    loading 
                    size={60}
                />
            </center>
        </div>
    );
}
