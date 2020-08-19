import React from 'react'

export default function Project() {
    return (
        <div>
            <div className="py-20 px-10">
                <h1 className="font-bold text-white text-5xl">About this Project</h1>
                <p className="text-white text-2xl py-10">
                    This is a project where the <a className="underline" href="https://rickandmortyapi.com/">Rick and Morty</a> API 
                    is consumed.<br/> The technologies used are React for the Fron-end, 
                    Axios <br/> for the data request and Tailwindcss for the web style.
                    </p>
            </div>
        </div>
    )
}
