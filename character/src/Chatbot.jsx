import { useState } from "react";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: "user" }]);
            setInput("");
        }
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", width: "300px" }}>
            <div style={{ height: "300px", overflowY: "scroll", marginBottom: "10px" }}>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            textAlign: msg.sender === "user" ? "right" : "left",
                            margin: "5px",
                        }}
                    >
                        <span style={{ background: "#f1f1f1", padding: "5px 10px", borderRadius: "5px" }}>
                            {msg.text}
                        </span>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ width: "80%" }}
            />
            <button onClick={sendMessage} style={{ width: "18%", marginLeft: "2%" }}>
                Send
            </button>
        </div>
    );
};

export default Chatbot;
