import React from 'react'
import ChatInput from './ChatInput'

function MainPage({currentTitle, value, setValue, getMessages}) {
    return (
        <>
            {!currentTitle && (
                <div className="main" >
                    <h1 id="page-title">ArtemGPT</h1>
                    <div className="grid-container">
                        <div className="grid-column first">
                            <div className="grid-heading">
                                <i className="fa-regular fa-sun"></i>
                                <h2>Examples</h2>
                            </div>
                            <ul className="chat-overview">
                                <li className="examples">
                                    <button>
                                        "Explain quantum computing in simple
                                        terms" →
                                    </button>
                                </li>
                                <li className="examples">
                                    <button>
                                        "Got any creative ideas for a 10 year
                                        old’s birthday?" →
                                    </button>
                                </li>
                                <li className="examples">
                                    <button>
                                        "How do I make an HTTP request in
                                        Javascript?" →
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="grid-column second">
                            <div className="grid-heading">
                                <i className="fa-solid fa-bolt"></i>
                                <h2>Capabilities</h2>
                            </div>
                            <ul className="chat-overview">
                                <li>
                                    Remembers what user said earlier in the
                                    conversation
                                </li>
                                <li>
                                    Allows user to provide follow-up corrections
                                </li>
                                <li>
                                    Trained to decline inappropriate requests
                                </li>
                            </ul>
                        </div>
                        <div className="grid-column third">
                            <div className="grid-heading">

                            <i className="fa-solid fa-triangle-exclamation"></i>
                                <h2>Limitations</h2>
                            </div>

                            <ul className="chat-overview">
                                <li>
                                    May occasionally generate incorrect
                                    information
                                </li>
                                <li>
                                    May occasionally produce harmful
                                    instructions or biased content
                                </li>
                                <li>
                                    Limited knowledge of world and events after
                                    2021
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            <ChatInput
                value={value}
                setValue={setValue}
                getMessages={getMessages}
            />
        </>
    )
}

export default MainPage
