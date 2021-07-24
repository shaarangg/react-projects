import React, { useState, useEffect } from 'react';
function SingleColor({ rgb, weight, index, hexColor }) {
    const [alert, setAlert] = useState();
    const bcg = rgb.join(',')
    const hexValue = `#${hexColor}`;
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 1000)
        return () => clearTimeout(timeout);
    }, [alert])
    return (
        <article
            className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${bcg})` }}
            onClick={() => {
                setAlert(true)
                navigator.clipboard.writeText(hexValue)
            }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hexValue}</p>
            {alert && <p className="alert">copied to clipboard</p>}
        </article>
    )
}
export default SingleColor;