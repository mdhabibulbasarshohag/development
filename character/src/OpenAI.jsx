import { useState } from "react";
import axios from "axios";

const OpenAI = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (input.trim()) {
            const userMessage = { text: input, sender: "user" };
            setMessages([...messages, userMessage]);

            // Call OpenAI API
            try {
                const response = await axios.post(
                    "https://api.openai.com/v1/chat/completions",
                    {
                        model: "gpt-3.5-turbo",
                        messages: [{ role: "user", content: input }],
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer YOUR_API_KEY`,
                        },
                    }
                );

                const botMessage = {
                    text: response.data.choices[0].message.content,
                    sender: "bot",
                };
                setMessages((prev) => [...prev, botMessage]);
            } catch (error) {
                console.error("Error:", error);
                setMessages((prev) => [
                    ...prev,
                    { text: "Sorry, something went wrong.", sender: "bot" },
                ]);
            }

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

export default OpenAI;
