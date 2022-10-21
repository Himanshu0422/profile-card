import React from "react";

export default function Main(){
    return (
        <div className="main">
            <div className="intro">
                <h2>Gojo Sotoru</h2>
                <h3>Six Eyes User</h3>
                <p>Jujutsu Socerer</p>
            </div>
            <div className="buttons">
                <button><i class="fa-solid fa-envelope"></i> Email</button>
                <button id="link"><i class="fa-brands fa-linkedin"></i> Linkedlin</button>
            </div>
            <div className="about">
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, itaque! Recusandae minus consectetur laboriosam temporibus dignissimos, ratione quas sapiente sint in quasi perferendis quia</p>
            </div>
            <div className="interest">
                <h3>Interests</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, itaque! Recusandae minus consectetur laboriosam temporibus dignissimos, ratione quas sapiente sint in quasi perferendis quia!</p>
            </div>
            <div className="icons">
                <button><i class="fa-brands fa-twitter"></i></button>
                <button><i class="fa-brands fa-facebook"></i></button>
                <button><i class="fa-brands fa-instagram"></i></button>
                <button><i class="fa-brands fa-github"></i></button>
            </div>
        </div>
    )
}