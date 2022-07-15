import React from "react";
import Convert from "./Convert";

const Main = ({ ArrOfvalutas }) => {


    return (
        <main className="main_wrap">
            <div className="main-container">
                <Convert text='have' ArrOfvalutas={ArrOfvalutas} />
            </div>
        </main>
    )
}

export default Main