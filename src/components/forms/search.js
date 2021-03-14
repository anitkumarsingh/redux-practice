import React, { useState } from 'react';
import { makeHttpRequest } from '../../utils'

const ReceipeCard = ({ data }) => {
    return (
        <div className="d-flex" >
            <div className="card" style={{ width: "18rem", }}>
                <img className="card-img-top" src={data.thumbnail} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>

                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Ingredients:</b> {data.ingredients}</li>
                </ul>
                <div className="card-body">
                    <a href={data.href} className="card-link">Show More</a>
                </div>
            </div>
        </div>
    )
}

const Search = () => {
    const [ingredient, setIndiredent] = useState('');
    const [receipe, setReceipe] = useState('');
    const [fetchedData, setFetchedData] = useState([]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const payload = {
            ingredient,
            receipe
        }
        try {
            const { results } = await makeHttpRequest('api', 'get', payload)
            setFetchedData(results)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            <div className="text-center">
                <h4>Food Finder </h4>
                <form onSubmit={(e) => submitHandler(e)}>
                    <label htmlFor="indiredent">Indiredent</label>{" "}
                    <input type="text" placeholder="Cheese,Paneer" name="indiredent"
                        onChange={(e) => setIndiredent(e.target.value)} />{" "}
                    <label htmlFor="recipe">Reciepe</label>{" "}
                    <input type="text" placeholder="adoo" name="recipe"
                        onChange={(e) => setReceipe(e.target.value)} />{" "}
                    <button >Submit</button>
                </form>
                <br />
            </div>

            <div className="container" style={{ marginLeft: 'auto', marginRight: "auto" }}>
                <div className="row">
                    <div className="col-md-12">
                        <p><b>We have found <i>{fetchedData.length}</i> results</b></p>
                    </div>


                    {
                        fetchedData && fetchedData.map((food, index) => {
                            return (
                                <div className="col-md-6 clearfix">
                                    <ReceipeCard data={food} key={index} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Search;