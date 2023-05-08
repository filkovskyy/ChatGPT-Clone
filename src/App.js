import { useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import MainPage from './components/MainPage'
import ChatFeed from './components/ChatFeed'

function App() {
    const [value, setValue] = useState('')
    const [message, setMessage] = useState('')
    const [previousChats, setPreviousChats] = useState([])
    const [currentTitle, setCurrentTitle] = useState('')

    const createNewChat = () => {
        setMessage(null)
        setValue('')
        setCurrentTitle(null)
    }

    const handleClick = (uniqueTitle) => {
        setCurrentTitle(uniqueTitle)
        setMessage(null)
        setValue('')
    }

    const getMessages = async () => {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                message: value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        try {
            const response = await fetch(
                'http://localhost:8000/completions',
                options
            )
            const data = await response.json()
            setMessage(data.choices[0].message)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        console.log(currentTitle, value, message)
        if (!currentTitle && value && message) {
            setCurrentTitle(value)
        }
        if (currentTitle && value && message) {
            setPreviousChats((prevChats) => [
                ...prevChats,
                {
                    title: currentTitle,
                    role: 'user',
                    content: value,
                },
                {
                    title: currentTitle,
                    role: message.role,
                    content: message.content,
                },
            ])
        }
    }, [message, currentTitle])

    console.log(previousChats)

    const currentChat = previousChats.filter(
        (previousChat) => previousChat.title === currentTitle
    )
    const uniqueTitles = Array.from(
        new Set(previousChats.map((previousChat) => previousChat.title))
    )
    console.log(uniqueTitles)

    return (
        <>

            <div className="app" >
                <SideBar
                    createNewChat={createNewChat}
                    uniqueTitles={uniqueTitles}
                    handleClick={handleClick}
                />

                <div className="content">
                    <MainPage
                        currentTitle={currentTitle}
                        value={value}
                        setValue={setValue}
                        getMessages={getMessages}
                    />
                    <ChatFeed currentChat={currentChat} />
                </div>
            </div>
        </>
    )
}

export default App
