import React from 'react'

function SideBar({ createNewChat, uniqueTitles, handleClick }) {
    return (
        <section className="side-bar">
            <button id="new-chat-btn" onClick={createNewChat}>
                <span>
                    <i className="fa-solid fa-plus"></i>New chat
                </span>
            </button>
            <ul className="history">
                <p id="history-title">History</p>
                {uniqueTitles?.map((uniqueTitle, index) => (
                    <li key={index} onClick={() => handleClick(uniqueTitle)}>
                        <i className="fa-regular fa-message"></i>
                        <p>{uniqueTitle.toUpperCase()}</p>
                    </li>
                ))}
            </ul>
            <nav>
                <p>Made by Artem</p>
            </nav>
        </section>
    )
}

export default SideBar
