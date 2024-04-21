const express = require('express');
const multer = require('multer');
const Image = require('./mongo.js');
const Booking = require( './Bookings.js') ;
const cors = require('cors');
const port = 3000;

const app = express()
app.use(express.json());

app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/content', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const { originalname, buffer } = req.file;
    const formData = req.body;

    const imageDataBase64 = buffer.toString('base64');

    const newImage = new Image({
      title: formData.title,
      description: formData.description,
      imageData: imageDataBase64,
      rating: 0
    });

    await newImage.save();

    res.status(201).json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/content', async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/bookings', async (req, res) => {
  try {
    const bookData = req.body;

    const newBooking = new Booking({
      vehicle: bookData.vehicle,
      date: bookData.date,
      from: bookData.from,
      to: bookData.title,
    });

    await newBooking.save();

    res.status(201).json({ message: 'Booking saved successfully' });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.post('/rating', async (req, res) => {
  try {
    const { title, rating } = req.body;

    const image = await Image.findOne({ title: title });

    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    image.numerator += rating;
    image.denominator++;

    await image.save();

    res.status(200).json({ message: 'Rating added successfully' });
  } catch (error) {
    console.error('Error adding rating:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})  
