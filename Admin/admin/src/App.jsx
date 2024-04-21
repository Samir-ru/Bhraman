import { useState } from 'react';
import axios from 'axios';
import Booking from './Bookings';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:3000/content', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        console.log('Data posted successfully');
      } 
    } catch (error) {
      console.error('Error posting data:', error.response);
    }
    setTitle("");
    setDescription("");
    setImage("");
  };



  return (
    <>
    <div className="container">
        <form onSubmit={handleFormSubmit} encType='multipart/form-data' className='left'>
        <h1>Add visiting locaitons</h1>
          Title:<input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          Image:<input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
          Description: <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} cols="30" rows="10"></textarea>
          <button type='submit'>Post</button>
        </form>
        <Booking/>
    </div>
    </>
  );
}

export default App;
