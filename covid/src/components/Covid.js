import React, { useEffect, useState } from "react"
import './Covid.css'

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);

        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
        getCovidData();
    }, []);


    return (
        <>
            <section>
                <h1>&#128308;LIVE</h1>
                <h2>COVID-19 CORONAVIRUS TRACKER</h2>

                <ul>
                    <li className="card">
                        <div className="card_inner country">
                            <p className="card_name">
                                <span>OUR</span>
                                COUNTRY
                            </p>
                            <p className="card_total card_small">INDIA</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card_inner recovered">
                            <p className="card_name">
                                <span>TOTAL</span>
                                RECOVERED
                            </p>
                            <p className="card_total card_small">{data.recovered}</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card_inner confirmed">
                            <p className="card_name">
                                <span>TOTAL</span>
                                CONFIRMED
                            </p>
                            <p className="card_total card_small">{data.confirmed}</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card_inner deaths">
                            <p className="card_name">
                                <span>TOTAL</span>
                                DEATHS
                            </p>
                            <p className="card_total card_small">{data.deaths}</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card_inner active">
                            <p className="card_name">
                                <span>TOTAL</span>
                                ACTIVE
                            </p>
                            <p className="card_total card_small">{data.active}</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card_inner updated">
                            <p classNameName="card_name">
                                <span>LAST</span>
                                UPDATED
                            </p>
                            <p className="card_total card_small">{data.lastupdatedtime}</p>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}
export default Covid;