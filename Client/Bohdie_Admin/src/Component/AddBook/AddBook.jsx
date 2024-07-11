import axios from 'axios';
import React, { useState } from 'react';

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  async function submit(e) {
    e.preventDefault();
    const data = {
      title: title,
      author: author,
      PublishYear: year
    };

    try {
      const response = await axios.post("http://localhost:300/Books", data);
      console.log(response)
      alert("Book is created Successfully");
      // Optionally, you can reset the form fields after successful submission
      setTitle("");
      setAuthor("");
      setYear("");
    } catch (error) {
      alert("Error creating book: " + error.message);
    }
  }

  return (
    <div className="Dashboardmain">
      <div className="container-fluid">
        <div className="rowdash">
          <form style={{ width: "-webkit-fill-available" }} onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Book Title</label>
              <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Book Author</label>
              <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} id="exampleInputPassword1" required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Publish Year</label>
              <input type="text" className="form-control" value={year} onChange={(e) => setYear(e.target.value)} id="exampleInputPassword1" required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
