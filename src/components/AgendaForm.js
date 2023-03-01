import React, { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import { MdAdd, MdCloudUpload } from "react-icons/md";
import bgImage from "../assets/agenda_bg.jpeg"

const AgendaForm = () => {
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleOnClick = () => {
    const agenda = {
      time: time.trim(),
      subject: subject.trim(),
      location: location.trim(),
      description: description.trim(),
    };
    if (!time.trim() || !subject.trim())
      return alert("Atlease enter a subject and a time!");

    // add to redux store
    
    //   reset
    reset()
  };

  const reset = () => {
    setSubject("");
    setTime("");
    setLocation("");
    setDescription("");
  }


  return (
    <div className="flex-[0.5] h-[100vh] w-full" style={{
        background:`url(${bgImage})`,
        backgroundPosition:"top right",
        backgroundSize:"cover",
    }}>
      <div className="h-full flex flex-col items-center justify-center gap-10">
        <p className="text-4xl text-white">Keep Track Of Your Day</p>

        {/* form */}
        <div className="bg-white rounded-2xl w-[412px] h-[551px] flex flex-col gap-5 p-10">
          <Input
            value={subject}
            setValue={setSubject}
            placeholder="Enter Subject*: Breakfast with Desmond"
          />
          <Input
            value={time}
            setValue={setTime}
            placeholder="Enter Time*: 8:30 - 9:30 AM"
          />
          <Input
            value={location}
            setValue={setLocation}
            placeholder="Enter Location(Optional): Sample Location"
          />
          <TextArea
            value={description}
            setValue={setDescription}
            placeholder="Enter Description (Optional)"
          />

          <Button onClick={handleOnClick} text="Add Agenda" Icon={MdAdd} />
          <p className="text-center">or</p>
          <Button text="Choose CSV File" Icon={MdCloudUpload} />
        </div>
      </div>
    </div>
  );
};

export default AgendaForm;
