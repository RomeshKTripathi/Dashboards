import React from "react";

function Card({ icon, data, text, classes }) {
    return (
        <div
            className={`select-none text-white p-4 rounded-lg *:self-center flex justify-between cursor-pointer duration-150 hover:scale-95 shadow-xl dark:shadow-black/20 shadow-white/10 ${classes} `}
        >
            <div>
                <div className="text-3xl font-bold">{data}</div>
                <span>{text}</span>
            </div>
            <img className="h-16 w-auto" src={icon} alt="/" />
        </div>
    );
}

export default Card;
