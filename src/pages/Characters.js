import React, {useEffect, useState} from 'react'
import axios from 'axios'
import arrowRight from '../images/arrow.svg'
import arrowLeft from '../images/left-arrow.svg'

export default function Characters() {
    const [data, setData] = useState([])
    const [count, setCount] = useState(2)
    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async(url) => {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=` + url)
        await setData(res.data.results)

    }
    const changePageNext = async(e) => {
        e.preventDefault()
        await setCount(count + 1)
        await fetchData(count)
    }
    const changePagePrev = async(e) => {
        e.preventDefault()
        await setCount(count - 1)
        await fetchData(count)
    }
    return (
        <div>
            <div className="py-10 flex justify-center">
                <form className="flex">
                    <div className="p-5">
                        <button className=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l w-24" onClick={changePagePrev}>
                            Previus
                            <img src={arrowLeft}></img>
                        </button>
                    </div>
                    <div className="p-5">
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r w-24" onClick={changePageNext}>
                            Next
                            <img src={arrowRight}></img>
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex flex-wrap pt-20" style={{justifyContent:'center'}}>
                {
                    data.map((p) => {
                        return(
                            <div key={p.id} className="flex p-5">
                            <div className="bg-white rounded-lg lg:flex shadow-2xl items-center">
                                    <div>
                                        <img src={p.image} alt={p.name} className="rounded-full p-2"></img>  
                                    </div>
                                    <div className="font-serif lg:flex-wrap">
                                        <article className="p-5">
                                            <h4 className="p-3 bg-green-600 rounded-full w-56">Name: {p.name}</h4>
                                        </article>
                                        <article className="p-5">
                                            <h4 className="p-3 bg-green-600 rounded-full w-56">Gender: {p.gender}</h4>
                                        </article>
                                        <article className="p-5">
                                            <h4 className="p-3 bg-green-600 rounded-full w-56">Location: {p.location.name}</h4>
                                        </article>
                                        <article className="p-5">
                                            <h4 className="p-3 bg-green-600 rounded-full w-56">Status: {p.status}</h4>
                                        </article>
                                    </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="py-10 flex justify-center">
                <form className="flex">
                    <div className="p-5">
                        <button className=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l w-24" onClick={changePagePrev}>
                            Previus
                            <img src={arrowLeft}></img>
                        </button>
                    </div>
                    <div className="p-5">
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r w-24" onClick={changePageNext}>
                            Next
                            <img src={arrowRight}></img>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
