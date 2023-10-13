import React, { useState } from 'react';
import SideBar from './SideBar';
import { CloudinaryContext, Image } from 'cloudinary-react';
import '../styles/Add.css';

const AddBrand = () => {
  const [clicked, setClicked] = useState(true);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'vbwpits8');
    const response = await fetch(
      'https://api.cloudinary.com/v1_1/ddsp5aq1k/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );
    const data = await response.json();
    setImageUrl(data.secure_url);
  };

  return (
    <div style={{ display: 'flex' }}>
      <SideBar setClicked={setClicked} clicked={clicked} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flex: 1,
          marginLeft: clicked ? '250px' : '70px',
        }}
      >
        <CloudinaryContext cloudName="ddsp5aq1k" apiKey="337975874429965">
          <form className="formadd">
            <span className="titleadd">Add an Airline</span>
            <label htmlFor="file-input">
              <Image
                publicId={imageUrl || 'default_avatar'}
                width="100"
                height="100"
                crop="fill"
                className="avatar"
              />
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
            />
            <input type="text" className="input" placeholder="Airline Name" />
            <input type="email" className="input" placeholder="email" />
            <label htmlFor="textarea">Airline Description</label>
            <textarea required="" cols="50" rows="10" id="textarea" name="textarea"></textarea>
            <button>Add Airline</button>
          </form>
        </CloudinaryContext>
      </div>
    </div>
  );
};

export default AddBrand;