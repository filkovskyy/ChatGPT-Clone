import React from 'react'
import TypingEffect from './TypingEffect'

function ChatFeed({ currentChat }) {
    return (
        <>
            <ul className="feed">
                {currentChat?.map((chatMessage, index) => (
                    <li
                        key={index}
                        className={
                            chatMessage.role === 'user'
                                ? 'user-message'
                                : 'assistant-message'
                        }
                    >
                        <div className="role">
                            {chatMessage.role === 'user' && (
                                <div className="user-prompt">
                                    <i className="fa-solid fa-user"></i>
                                </div>
                            )}
                            {chatMessage.role === 'assistant' && (
                                <i className="fa-solid fa-robot"></i>
                            )}
                        </div>
                        <div className="message-content">
                            <TypingEffect message={chatMessage.content} />
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ChatFeed
