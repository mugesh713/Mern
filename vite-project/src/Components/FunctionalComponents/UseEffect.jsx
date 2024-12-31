/*import { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/")
            .then((res) => setPost(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users/")
            .then((res) => setUser(res.data))
            .catch((err) => console.log(err));
    }, []);

    const sectionStyle = {
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "800px",
        margin: "20px auto",
    };

    const headingStyle = {
        textAlign: "center",
        color: "#333",
        textTransform: "uppercase",
        marginBottom: "20px",
    };

    const listStyle = {
        listStyle: "none",
        padding: "0",
        margin: "0",
    };

    const listItemStyle = {
        backgroundColor: "#fff",
        margin: "10px 0",
        padding: "15px",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        display: "flex",
        alignItems: "center",
    };

    const hoverEffect = {
        ":hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            color: "#333", // Ensuring visibility with a darker color
        },
    };

    const serialStyle = {
        fontWeight: "bold",
        marginRight: "10px",
        color: "#007bff",
    };

    return (
        <section style={sectionStyle}>
            <i><h2 style={headingStyle}>Fetching data from Json Placeholder API</h2></i>
            <h2 style={{ ...headingStyle, fontSize: "1.5rem", marginBottom: "10px" }}>Posts</h2>
            <ol style={listStyle}>
                {post.map((data, index) => (
                    <li key={data.id} style={{ ...listItemStyle, ...hoverEffect }}>
                        <span style={serialStyle}>{index + 1}.</span>
                        <b>{data.title}</b>
                    </li>
                ))}
            </ol>
            <h2 style={{ ...headingStyle, fontSize: "1.5rem", marginTop: "30px", marginBottom: "10px" }}>Users</h2>
            <ol style={listStyle}>
                {user.map((data, index) => (
                    <li key={data.id} style={{ ...listItemStyle, ...hoverEffect }}>
                        <span style={serialStyle}>{index + 1}.</span>
                        <b><strong>{data.name}</strong> - <em>{data.email}</em></b>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default UseEffect;
*/

import { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [showPosts, setShowPosts] = useState(false);
    const [showUsers, setShowUsers] = useState(false);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/")
            .then((res) => setPosts(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users/")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err));
    }, []);

    const sectionStyle = {
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "800px",
        margin: "20px auto",
    };

    const headingStyle = {
        textAlign: "center",
        color: "#333",
        textTransform: "uppercase",
        marginBottom: "20px",
    };

    const listStyle = {
        listStyle: "none",
        padding: "0",
        margin: "0",
    };

    const listItemStyle = {
        backgroundColor: "#fff",
        margin: "10px 0",
        padding: "15px",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        display: "flex",
        alignItems: "center",
        color: "#333", // Ensuring visibility
    };

    const serialStyle = {
        fontWeight: "bold",
        marginRight: "10px",
        color: "#007bff",
    };

    const buttonStyle = {
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        cursor: "pointer",
        marginBottom: "20px",
    };

    const toggleVisibility = (type) => {
        if (type === "posts") {
            setShowPosts(!showPosts);
        } else if (type === "users") {
            setShowUsers(!showUsers);
        }
    };

    return (
        <section style={sectionStyle}>
            <h2 style={headingStyle}>
                Fetching Data from JSON Placeholder API
            </h2>

            {/* Posts Section */}
            <button
                style={buttonStyle}
                onClick={() => toggleVisibility("posts")}
            >
                {showPosts ? "Show Less Posts" : "Show More Posts"}
            </button>
            {showPosts && (
                <div>
                    <h3 style={{ ...headingStyle, fontSize: "1.5rem" }}>Posts</h3>
                    <ol style={listStyle}>
                        {posts.map((post, index) => (
                            <li key={post.id} style={listItemStyle}>
                                <span style={serialStyle}>{index + 1}.</span>
                                <b>{post.title}</b>
                            </li>
                        ))}
                    </ol>
                </div>
            )}

            {/* Users Section */}
            <button
                style={buttonStyle}
                onClick={() => toggleVisibility("users")}
            >
                {showUsers ? "Show Less Users" : "Show More Users"}
            </button>
            {showUsers && (
                <div>
                    <h3 style={{ ...headingStyle, fontSize: "1.5rem" }}>Users</h3>
                    <ol style={listStyle}>
                        {users.map((user, index) => (
                            <li key={user.id} style={listItemStyle}>
                                <span style={serialStyle}>{index + 1}.</span>
                                <b>
                                    <strong>{user.name}</strong> -{" "}
                                    <em>{user.email}</em>
                                </b>
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </section>
    );
};

export default UseEffect;
