import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UpdateBook() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:300/Books/${id}`)
      .then((response) => {
        const { title, author, PublishYear } = response.data;
        setTitle(title);
        setAuthor(author);
        setYear(PublishYear.toString()); // Assuming PublishYear is stored as a number
      })
      .catch((error) => {
        console.error('Error fetching book:', error);
        alert('Failed to fetch book details');
      });
  }, [id]);

  async function submit(e) {
    e.preventDefault();
    const data = {
      title: title,
      author: author,
      PublishYear: parseInt(year) // Convert year back to number if necessary
    };

    try {
      const response = await axios.put(`http://localhost:300/Books/${id}`, data);
      console.log(response);
      alert('Data is updated Successfully');
    } catch (error) {
      alert('Error updating book: ' + error.message);
    }
  }

  return (
    <div className="Dashboardmain">
      <div className="container-fluid">
        <div className="rowdash">
          <form style={{ width: '-webkit-fill-available' }} onSubmit={submit}>
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
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateBook;
