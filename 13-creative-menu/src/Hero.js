import React from 'react'
import phoneImg from "./images/phone.svg";
export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-center">
                <article className="hero-info">
                    <h1>Payments infrastructure <br /> for the internet</h1>
                    <p>
                        Millions of companies of all sizes—from startups to Fortune 500s—use
                        Stripe’s software and APIs to accept payments, send payouts, and
                        manage their businesses online.
                    </p>
                    <button className="btn">start now</button>
                </article>
                <article className="hero-images">
                    <img src={phoneImg} alt="image" />
                </article>
            </div>
        </section>
    )
}
