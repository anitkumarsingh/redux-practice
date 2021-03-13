import React from 'react'

const Search = () => {
    return (
        <form>
            <label htmlFor="indiredent">Indiredent</label>
            <input type="text" placeholder="Cheese,Paneer" name="indiredent" />
            <label htmlFor="recipe">Reciepe</label>
            <input type="text" placeholder="adoo" name="recipe" />
            <button>Submit</button>
        </form>
    )
}

export default Search;