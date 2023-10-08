import React, { useState } from 'react';

function Product() {
  const [image, setImage] = useState(null);

  function handleFile(e){
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    }
    reader.onerror = error => {
      console.log("Error : ",error);
    }
  }

  function uploadFile(e){
    e.preventDefault()
    fetch('http://localhost:8080/images',{
      method:"POST",
      body:JSON.stringify({base64:image}),
      heaeder:{
        'Content-Type':'application/json',
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*"
      }
    })
    .then((res)=>res
    .json())
    .then((data) => console.log(data))
  }

  return (
    <div>
      <form>
        <input type="file" accept="img/*" onChange={handleFile} />
        <button type="submit" onClick={uploadFile}>Upload</button>
      </form>
      {image && <img width={100} height={100} src={image} alt="Preview" />}
    </div>
  );
}

export default Product;
