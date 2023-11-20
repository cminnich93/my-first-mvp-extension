const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
app.use(cors());


const app = express();
const port = 4000;


const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});


const upload = multer({ storage: storage });


app.use('/uploads', express.static('uploads'));


app.post('/upload', upload.single('photo'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  

  res.status(200).json({ message: 'File uploaded successfully.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
