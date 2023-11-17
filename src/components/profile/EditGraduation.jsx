import React, { useEffect, useState } from "react";
import { bachelorCourses } from "../../app/registration/registrationform/formSelectOption";
import { MenuItem, TextField } from "@mui/material";
import GeneralButton from "../common/GeneralButton";
import CommonModalBox from "./CommonModalBox";

const EditGraduation = ({ graduation }) => {
  const [gradCourse, setGradCourse] = useState(graduation);
  const handleChange = (e) => {
    setGradCourse(e.target.value);
  };

  return (
    <CommonModalBox>
      <TextField
        // id="outlined-select-currency"
        name="gradCourse"
        value={gradCourse}
        onChange={handleChange}
        style={{ margin: "0.5rem" }}
        fullWidth
        select
        label="Graduation course"
        variant="filled"
        required
      >
        <MenuItem value="nothing selected"> nothing selected </MenuItem>
        {bachelorCourses.map((course, index) => (
          <MenuItem style={{ zIndex: "8001" }} key={index} value={course}>
            {course}
          </MenuItem>
        ))}
      </TextField>

      <div className="h-10 mt-5 flex justify-center items-center ">
        {gradCourse === graduation ? (
          <GeneralButton
            disabled={true}
            className="!bg-green-200 hover:!bg-green-200 cursor-not-allowed p-2"
            buttonText={"Save changes"}
          />
        ) : (
          <GeneralButton
            className="!bg-green-500 hover:!bg-green-600 p-2"
            buttonText={"Save changes"}
          />
        )}
      </div>
      {/* <div className='h-10 flex justify-center items-center ' >
        {gradCourse === graduation ? "" : <GeneralButton className="bg-green-500 hover:bg-green-600 p-2" buttonText={"Save changes"} />} 
      </div> */}
    </CommonModalBox>
  );
};

export default EditGraduation;