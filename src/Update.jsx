import React, { useState } from "react";

function Update({ id }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(1);

  const handleUpdate = (e) => {
    e.preventDefault();

    const data = { id, title, body, userId };
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
      alert("Form Submitted");
      return response.json();
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((response) => {
        response.json()
    }).then(response => {
        console.log(response)
    });
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <h3>PUT/DELETE</h3>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Input Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            onChange={(e) => setBody(e.target.value)}
            placeholder="Input Body"
            value={body}
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Input UserId"
            value={userId}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </form>
    </div>
  );
}

export default Update;
