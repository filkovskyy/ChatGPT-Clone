
function ChatInput({ value, setValue, getMessages }) {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            getMessages();
        }
    };

    return (
        <div className="bottom-section">
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Send a message."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <div id="submit" onClick={getMessages}>
                    <i className="fa-regular fa-paper-plane"></i>
                </div>
            </div>
            <p className="info">
                This resource is using OpenAI API. This is not ChatGPT. You can find
                the original ChatGPT <a href="https://chat.openai.com/">here</a>.
            </p>
        </div>
    );
}

export default ChatInput;
