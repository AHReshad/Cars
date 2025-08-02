import { useState, type ChangeEvent, type FormEvent } from 'react';
import axios from 'axios';

const url = "http://localhost:8080/uploads";

interface PostImage {
  myFile: string;
  name: string;
  description: string;
  company: string;
  year: number;
  price: number;
}

function App() {
  const [postImage, setPostImage] = useState<PostImage>({
    myFile: "",
    name: "",
    description: "",
    company: "",
    year: 0,
    price: 0
  });

  const createPost = async (newImage: PostImage) => {
    try {
      await axios.post(url, newImage);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setPostImage({ ...postImage, myFile: base64 });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPost(postImage);
    console.log("Uploaded");
    setPostImage({
      myFile: "",
      name: "",
      description: "",
      company: "",
      year: 0,
      price: 0
    });
  };

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setPostImage({ ...postImage, myFile: base64 });
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">List Your Classic Car</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Company */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Make:</label>
          <input
            type="text"
            placeholder="e.g., Ford"
            className="border rounded-md p-2 bg-[#f9f3ee]"
            value={postImage.company}
            onChange={(e) => setPostImage({ ...postImage, company: e.target.value })}
          />
        </div>

        {/* Model */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Model:</label>
          <input
            type="text"
            placeholder="e.g., Mustang"
            className="border rounded-md p-2 bg-[#f9f3ee]"
            value={postImage.name}
            onChange={(e) => setPostImage({ ...postImage, name: e.target.value })}
          />
        </div>

        {/* Year */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Year:</label>
          <input
            type="number"
            placeholder="e.g., 1967"
            className="border rounded-md p-2 bg-[#f9f3ee]"
            value={postImage.year}
            onChange={(e) => setPostImage({ ...postImage, year: Number(e.target.value) })}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Description:</label>
          <textarea
            placeholder="Describe your car..."
            className="border rounded-md p-2 bg-[#f9f3ee]"
            value={postImage.description}
            onChange={(e) => setPostImage({ ...postImage, description: e.target.value })}
          />
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Rental Price (per day):</label>
          <input
            type="number"
            placeholder="e.g., 250"
            className="border rounded-md p-2 bg-[#f9f3ee]"
            value={postImage.price}
            onChange={(e) => setPostImage({ ...postImage, price: Number(e.target.value) })}
          />
        </div>

        {/* Upload Image */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="border border-dashed border-gray-400 rounded-md p-6 text-center bg-[#fffaf7]"
        >
          <p className="mb-2 text-sm text-gray-700 font-semibold">Upload Images</p>
          <p className="text-xs text-gray-500 mb-4">Drag and drop images here, or click to select files</p>

          <label htmlFor="file-upload" className="cursor-pointer inline-block border px-4 py-2 rounded bg-[#eee] hover:bg-gray-200 text-sm">
            Upload Image
          </label>
          <input
            type="file"
            id="file-upload"
            accept=".jpeg, .png, .jpg"
            className="hidden"
            onChange={handleFileUpload}
          />
          {postImage.myFile && (
            <div className="mt-4 flex justify-center">
              <img src={postImage.myFile} alt="Uploaded Preview" className="h-40 rounded shadow" />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600"
          >
            Submit Listing
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;

function convertToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
