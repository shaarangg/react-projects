import React, { useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
function Question({ title, info }) {
    const [showInfo, setShowInfo] = useState(false);
    const changeInfo = () => {
        setShowInfo((showInfo) => {
            return !showInfo
        })
    }
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={changeInfo}>
                    {
                        showInfo ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />
                    }
                </button>
            </header>
            {
                // This means that only if showInfo is true, then only we can see the paragraph
                showInfo && <p>{info}</p>
            }

        </article>
    );
}
export default Question;