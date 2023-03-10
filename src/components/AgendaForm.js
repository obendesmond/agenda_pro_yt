import React, { useState, useEffect } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import { MdAdd, MdCloudUpload } from "react-icons/md";
import bgImage from "../assets/agenda_bg.jpeg"
import { useDispatch, useSelector } from 'react-redux';
import { addAgenda } from "../store/actions/agendaActions";

const AgendaForm = () => {
  const dispatch = useDispatch()
  const { currentAgendaEdit } = useSelector(state => state.agenda);
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
   if(currentAgendaEdit?.id){
    const {subject, time, location, description} = currentAgendaEdit;
    setSubject(subject)
    setTime(time)
    setLocation(location)
    setDescription(description)
   }
  }, [currentAgendaEdit]);

  const handleOnClick = () => {
    const agenda = {
      subject: subject.trim(),
      time: time.trim(),
      location: location.trim(),
      description: description.trim(),
    };

    if (!time.trim() || !subject.trim())
      return alert("Atlease enter a subject and a time!");

      // set agenda id to current agenda id in edit mode
    if(currentAgendaEdit?.id) agenda.id = currentAgendaEdit.id

    // add to redux store
    dispatch(addAgenda(agenda))

    //   reset
    reset();
  };

  const reset = () => {
    setSubject("");
    setTime("");
    setLocation("");
    setDescription("");
  }


  return (
    <div
      className="flex-[0.5] h-[100vh] w-full top-0 sticky z-10"
      style={{
        background: `url(${bgImage})`,
        backgroundPosition: "top right",
        backgroundSize: "cover",
      }}
    >
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

          <Button
            onClick={handleOnClick}
            text={currentAgendaEdit?.id ? "Save Agenda" : "Add Agenda"}
            Icon={MdAdd}
          />
          <p className="text-center">or</p>
          <Button text="Choose CSV File" Icon={MdCloudUpload} />
        </div>
      </div>
    </div>
  );
};

export default AgendaForm;
