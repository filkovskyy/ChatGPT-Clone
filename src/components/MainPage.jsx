import React from 'react'

function MainPage({ currentTitle }) {
    return (
        <section className="main">
            {!currentTitle && (
                <div className="mainPage">
                    <h1 id="page-title">ArtemGPT</h1>
                    <div className="grid-container">
                        <div className="grid-column first">
                            <i className="fa-regular fa-sun"></i>
                            <h2 className="grid-heading">Examples</h2>
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
                            <i className="fa-solid fa-bolt"></i>
                            <h2 className="grid-heading">Capabilities</h2>
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
                            <i className="fa-solid fa-triangle-exclamation"></i>
                            <h2 className="grid-heading">Limitations</h2>
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
        </section>
    )
}

export default MainPage
