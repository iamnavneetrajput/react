import React from "react";
import { Cateogries } from "../../pages/Data";
import './categories.css'
import PageTitles from "../../pages/PageTitles";
const Cateogories = () => {

    return (

        <>
          
                <div className="Cateogories">
                    <h3> {PageTitles.Cateogories} </h3>
                    <div className="Cateogories-list">
                        {Cateogries.map(Cateogories => (
                            <a key={Cateogories.id} href={Cateogories.link}>
                                <div key={Cateogories.id} className="Cateogories-div">
                                    <h2>{Cateogories.name}</h2>
                                    <p>{Cateogories.Description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
            </div>
        </>
    )
}

export default Cateogories;