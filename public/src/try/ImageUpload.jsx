import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Input } from "@mui/material";
import { host } from "../utils/Apiurl";
import axios from "axios";
function ImageUpload() {
  async function handelSubmit(e) {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("name", file.name);
    data.append("file", file);
    try {
      const res = await axios.post(`${host}/user/upload`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex justify-center items-center justify-items-center mt-20">
      <Button
        component="label"
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <Input
          type="file"
          className=" overflow-hidden focus:border-none focus:outline-none h-1 w-0 absolute whitespace-nowrap left-0 bottom-0"
          // name="upload_image"
          onChange={handelSubmit}
        ></Input>
      </Button>
    </div>
  );
}
export default ImageUpload;

// import axios from "axios";
// import { useState } from "react";
// import { host } from "../utils/Apiurl";

// function ImageUpload() {
//   const [file, setFile] = useState(null);
//   async function Submithandel() {
//     // console.log(file);
//     const data = new FormData();
//     data.append("name", file.name);
//     data.append("file", file);
// const response = await axios.post(`${host}/user/upload`, data, {
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// });
//     console.log(response);
//   }
//   return (
//     <div className="mt-40 ml-11">
//       <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
//       <button onClick={Submithandel}>upload</button>
//     </div>
//   );
// }
// export default ImageUpload;
