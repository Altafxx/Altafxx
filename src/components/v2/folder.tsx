"use client"

import { useState } from "react";

const folderOpen = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
    <path fill="#FFA000" d="M38,12H22l-4-4H8c-2.2,0-4,1.8-4,4v24c0,2.2,1.8,4,4,4h31c1.7,0,3-1.3,3-3V16C42,13.8,40.2,12,38,12z"></path><path fill="#FFCA28" d="M42.2,18H15.3c-1.9,0-3.6,1.4-3.9,3.3L8,40h31.7c1.9,0,3.6-1.4,3.9-3.3l2.5-14C46.6,20.3,44.7,18,42.2,18z"></path></svg>

const folderClose = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
    <path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"></path><path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"></path></svg>


export default function folder({ name, redirect, action, state }: { name?: string, redirect?: string, action?: Function, state?: boolean } = {}) {
    const [a, seta] = useState(state ?? false);

    function clickFunc() {
        seta(!a)
        var mouseClick = new Audio("sounds/mouse-click.mp3");
        if (name) mouseClick.play()
        if (action) action()
    }
    return (a && name)
        ? <a href={redirect} className="cursor-pointer select-none text-center" onClick={() => clickFunc()}>
            {folderOpen}
            <div className="truncate max-w-[100px] text-sm">{name}</div>
        </a>
        : <a href={redirect} className="cursor-pointer select-none text-center" onClick={() => clickFunc()}>{folderClose}<div className="truncate max-w-[100px] text-sm">{name}</div></a>
}