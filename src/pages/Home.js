import React from 'react'
import RickAndMorty from '../images/portal.png'
import Github from '../images/github.svg'
import Instagram from '../images/instagram.svg'
import Twitter from '../images/twitter.svg'

export default function Home() {
    const socialMedia = [
        {
            url:'https://github.com/Nahuelluca20',
            img:Github
        },
        {
            url:'https://www.instagram.com/nahuel_lucaa/',
            img:Instagram
        },
        {
            url:'https://twitter.com/nahuel_lucaa',
            img:Twitter
        },
    ]
    return (
        <>
        <div className="flex justify-center">
            <img src={RickAndMorty} className="lg:w-2/4"></img>
        </div>
        <div>
            <ul className="lg:flex justify-center">
                {
                    socialMedia.map((item) => {
                        return(
                            <li className="p-16 flex justify-center" key={item.url}>
                                <div>
                                    <a href={item.url} className="">
                                        <img src={item.img} className="w-10"></img>
                                    </a>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}
