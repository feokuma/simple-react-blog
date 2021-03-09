import React from 'react';

function CreateNewPost() {
  return (
    <div>
      <form>
        <h1>Create New Post</h1>
        <input type="text" placeholder="Title" required />
        <p>test</p>
        <br />
        <br />
        <textarea placeholder="Contents" cols={41} rows={8} required />
        <br />
        <br />
        <button type="submit">Save Post</button>
      </form>
    </div>
  );
}

export default CreateNewPost;
