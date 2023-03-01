 import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from './Button';
import { MdAdd, MdCloudUpload } from "react-icons/md";

 const AgendaForm = () => {
   return (
     <div className="flex-[0.5] h-[100vh] w-full bg-blue-800 flex flex-col items-center justify-center gap-10">
       <p className="text-4xl text-white">Keep Track Of Your Day</p>

       {/* form */}
       <div className="bg-white rounded-2xl w-[412px] h-[551px] flex flex-col gap-5 p-10">
         <Input placeholder="Enter Subject*: Breakfast with Desmond" />
         <Input placeholder="Enter Time*: 8:30 - 9:30 AM" />
         <Input placeholder="Enter Location(Optional): Sample Location" />
         <TextArea placeholder="Enter Description (Optional)" />
         <Button text="Add Agenda" Icon={MdAdd} />
         <p className="text-center">or</p>
         <Button text="Choose CSV File" Icon={MdCloudUpload} />
       </div>
     </div>
   );
 };

 export default AgendaForm;