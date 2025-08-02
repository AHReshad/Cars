import express from 'express';
import connect from './database/connect.js';
import cors from 'cors';
import Post from './model.js/model.js';

const app = express();

app.use(cors());  // اینجا باید قبل از روت‌ها باشه
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));


const port = 8080;

// این مسیر برای گرفتن تمام تصاویر هست
app.get('/api/images', async (req, res) => {
  try {
    const images = await Post.find({});
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching images' });
  }
});

app.post("/uploads", async (req, res) => {
  const body = req.body;
  try {
    const newImage = await Post.create(body);
    await newImage.save();
    res.status(201).json({ msg: "New image uploaded" });
  } catch (error) {
    res.status(400).json({ message: 'Error uploading the image to the site' });
  }
});

connect().then(() => {
  try {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Can't connect to the server");
  }
}).catch((error) => {
  console.log("Invalid database connection");
});
