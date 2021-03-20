import React from 'react'

const Memes = ({ submitHandler, setText0, setText1, ...props }) => {
    return (
        <div>
            <div className="text-center">
                <br />
                <h4><i>Write some text</i></h4> <br />
                <form>
                    <label htmlFor="top">Top</label>{" "}
                    <input type="text" placeholder="Top text... " name="top"
                        onChange={(e) => setText0(e.target.value)} />{" "}
                    <label htmlFor="bottom">Bottom</label>{" "}
                    <input type="text" placeholder="Bottom text..." name="bottom"
                        onChange={(e) => setText1(e.target.value)} />{" "}
                </form>
                <br />
            </div>
        </div>
    )
}

export default Memes