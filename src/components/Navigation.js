import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Characters from '../pages/Characters'
import Home from '../pages/Home'
import Project from '../pages/Project'
import RickAndMorty from '../images/rym-logo.png'

export default function Navigation() {
    const navItems = [
        {
            title:'Home',
            url:`${process.env.PUBLIC_URL}/`,
            component:<Home />
        },
        {
            title:'Characters',
            url:`${process.env.PUBLIC_URL}/characters`,
            component:<Characters />
        },
        {
            title:'About',
            url:`${process.env.PUBLIC_URL}/about`,
            component:<Project />
        }    
    ]
    return (
        <Router>
            <nav className="">
                {
                    navItems.map((item) => {
                        return(
                            <li key={item.title} className="inline-flex px-5 py-10 font-serif">

                                <Link to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })
                }
                <div className="lg:float-right flex justify-center">
                    <img src={RickAndMorty} className="w-64 px-2"></img>
                </div>
            </nav>

        <Switch>
                {
                    navItems.map((item) => {
                        return(
                            <Route exact path={item.url} key={item.title}>
                                {item.component}
                            </Route>
                        )
                    })
                }
        </Switch>

        </Router>
    )
}
