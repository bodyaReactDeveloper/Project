import React from "react";

const Header = ({ArrOfvalutas}) => {

    

    return (
        <header className="header">
            <div className="header_container">
                {
                    ArrOfvalutas.map( (i,index) => {
                        return <div key={index} className="valuta">
                            {index !== 0 && <span>1 {i.cc} = {i.rate} UAH</span>}
                        </div>
                    })
                }
            </div>

        </header>
    )
}
export default Header;
