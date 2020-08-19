import React from 'react'
import Coding from '../images/coding.svg'

export default function Foot() {
    return (
        <div className="flex justify-center py-10">
            <div className="flex">
                <h1 className="text-base">Created by Nahuel Luca  </h1>
                <div className="px-2 py-1">
                    <img src={Coding} className="w-5"></img>
                </div>
            </div>
        </div>
    )
}
