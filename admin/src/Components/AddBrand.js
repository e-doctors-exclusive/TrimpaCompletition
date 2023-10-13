import React, { useState } from 'react';
import SideBar from './SideBar';
import { CloudinaryContext, Image } from 'cloudinary-react';
import '../styles/Add.css';
import axios from 'axios';

const AddBrand = () => {
  const [clicked, setClicked] = useState(true);

  const [imageUrl, setImageUrl] = useState('');
  const [name, setName]=useState('');
  const [description, setDescription]=useState('');
  const [email, setEmail] = useState('');
  
  

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
  


   const addBrands = (body)=>{
    axios.post('http://localhost:1128/brands/add', body)
    .then((res)=>{
      console.log("Successfully added brands");
      setClicked(false);
    })
    .catch((err)=>{
     console.log(err)
    })
   }



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
            <input type="text" className="input" placeholder="Airline Name" onChange={((e)=>{setName(e.target.value)})}/>
            <input type="email" className="input" placeholder="email"  onChange={((e)=>{setEmail(e.target.value)})}/>
            <label htmlFor="textarea" onChange={((e)=>{setDescription(e.target.value)})}>Airline Description</label>
            <textarea required="" cols="50" rows="10" id="textarea" name="textarea"></textarea>
            <button onClick={(()=>{ addBrands( {name:name , description:description, email:email} )})}>Add Airline</button>
          </form>
        </CloudinaryContext>
      </div>
    </div>
  );  
};

export default AddBrand;