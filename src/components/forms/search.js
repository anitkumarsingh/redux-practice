import React, { useState } from 'react';
import { makeHttpRequest } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { setReciepe, addFavRecipes, } from '../../redux/actions'
import { Link } from 'react-router-dom';

const ReceipeCard = ({ data }) => {
    const [favourite, setFavourite] = useState(false);
    const dispatchRecipes = useDispatch();
    console.log('stae', useSelector(s => s))

    const markFavRecipe = () => {
        setFavourite(true);
        dispatchRecipes(addFavRecipes(data))
    }
    return (
        <div className="d-flex" >
            <div className="card" style={{ width: "18rem", }}>
                <img className="card-img-top" src={data.thumbnail} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{data.title} {favourite ? <span>&#9733;</span> : <span onClick={markFavRecipe}>&#9734;</span>}</h5>

                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Ingredients:</b> {data.ingredients}</li>
                </ul>
                <div className="card-body" >
                    <a href={data.href} className="card-link">Read More</a>
                    {/* <button onClick={() => dispatchRecipes(removeFavRecipes(data))}>Mark as un-favourite</button> */}
                </div>
            </div>
        </div>
    )
}

const Search = (props) => {
    const [ingredient, setIndiredent] = useState('');
    const [receipe, setReceipe] = useState('');
    const [fetchedData, setFetchedData] = useState([]);
    const dispatchRecipes = useDispatch();


    const submitHandler = async (e) => {
        e.preventDefault();
        const payload = {
            ingredient,
            receipe
        }
        try {
            const { results } = await makeHttpRequest('api', 'get', payload)
            setFetchedData(results);
            dispatchRecipes(setReciepe(results));
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            <div className="text-center">
                <br />
                <h4>Food Finder </h4>
                <form onSubmit={(e) => submitHandler(e)}>
                    <label htmlFor="indiredent">Ingredients</label>{" "}
                    <input type="text" placeholder="Cheese,Paneer" name="indiredent"
                        onChange={(e) => setIndiredent(e.target.value)} />{" "}
                    <label htmlFor="recipe">Dishes</label>{" "}
                    <input type="text" placeholder="adobo" name="recipe"
                        onChange={(e) => setReceipe(e.target.value)} />{" "}
                    <button >Submit</button>
                </form>
                <br />
            </div>

            <div className="container" style={{ marginLeft: 'auto', marginRight: "auto" }}>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p><b>We have found <i>{fetchedData.length}</i> results</b></p>
                    </div>


                    {
                        fetchedData && fetchedData.map((food, index) => {
                            return (
                                <div className="col-md-6 clearfix" key={index}>
                                    <ReceipeCard data={food} />
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