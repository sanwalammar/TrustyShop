import React, {useState} from 'react'

function Imgupload(props) { 

    const [image, setImage] = useState("")

   
    
    const submit = (e) => {
     e.preventDefault();
     
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "ecomshop")
    data.append("cloud_name", "dmj7wemuv")

    fetch("https://api.cloudinary.com/v1_1/dmj7wemuv/image/upload", {
      method:"post",
      body: data
    })
    .then((res)=>res.json())
    .then((data)=>{
      props.onClickurl(data.url);
    })
    .catch((err)=>{
      console.log(err)
    })
}
  return (
    <div>
      <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
      <button onClick={(e)=>submit(e)}> 
       Upload </button>
    </div>
  )
}

export default Imgupload
