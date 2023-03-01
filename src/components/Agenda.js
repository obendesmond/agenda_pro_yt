import React, { useState } from "react";
import CircularIcon from "./CircularIcon";
import { MdCloudDownload } from "react-icons/md";
import Icon from "./Icon";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { BiHide } from "react-icons/bi";
import AgendaSingle from "./AgendaSingle";

const Agenda = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex-[0.5] bg-greyColor w-full">
      {/* agenda header */}
      <div className="bg-white top-0 sticky flex flex-row items-center justify-end pr-10 gap-2 py-3 w-full shadow-md">
        <Icon
          click={() => setShow(!show)}
          color={show ? "red" : "blue"}
          Icon={show ? BiHide : BsQuestionCircleFill}
        />
        <Icon Icon={MdDelete} />
        <CircularIcon Icon={MdCloudDownload} />
      </div>

      <div className="p-10">
        {show ? (
          <div>
            <p className="text-4xl mb-5">Agenda-Pro Instructions</p>
            <ul>
              <li>
                Using the form, you can add an agenda by entering atleast a
                subject and time
              </li>
              <br />
              <li>You can delete all agenda with the trash icon above</li>
              <br />
              <li>
                Your csv should have the "subject", "time", "location" and
                "description" as columns, seperated by commas
              </li>{" "}
              <br />
              <li>
                Click the "Choose csv File" button and choose a ".csv" (comma
                seperated values) file
              </li>
              <br />
              <li>
                Then click the "Upload ... to agenda" green button to upload to
                agenda
              </li>
              <br />
              <li>All previous agenda will be completely replaced</li>
            </ul>
          </div>
        ) : (
          <div>
            <p className="text-4xl mb-5">All My Agenda</p>
            <AgendaSingle />
            <AgendaSingle />
            <AgendaSingle />
            <AgendaSingle />
            <AgendaSingle />
            <AgendaSingle />
            <AgendaSingle />
            <AgendaSingle />
            <AgendaSingle />
          </div>
        )}
      </div>
    </div>
  );
};

export default Agenda;
