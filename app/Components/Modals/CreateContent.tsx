"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import Button from "../Button/Button";
import { add, edit, plus } from "@/app/utils/Icons";
import {FaTimes} from "react-icons/fa";
import DOMPurify from 'dompurify';


function CreateContent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);
  const [input, setInput] = useState('');

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput(e.target.value);
  // };

  const sanitize = (input: string) => DOMPurify.sanitize(input);

  const { theme, allTasks, closeModal, editTask, setEditTask } = useGlobalState();

  const handleClose = () => {
    closeModal();
    if(editTask){
      window.location.reload();
    }
  }

  useEffect(() =>  {
    if(editTask){
      setTitle(editTask.title);
      setDescription(editTask.description);
      setDate(editTask.date);
      setCompleted(editTask.isCompleted);
      setImportant(editTask.important);
    }
  }, [editTask]);

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "important":
        setImportant(e.target.checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const task = {
      title,
      description,
      date,
      completed,
      important,
    };

    try {
      let res;
      if (editTask) {
        res = await axios.put(`/api/tasks/${editTask.id}`, task);
      } else {
        res = await axios.post("/api/tasks", task);
      }

      if (res.data.error) {
        toast.error(res.data.error);
      } else {
        toast.success(`Task ${editTask ? "edited" : "created"} successfully.`);
        allTasks();
        closeModal();
        setEditTask(null);
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.log('Error duging task submission"', error);
    }
  };

  // const csrfToken = headers().get("X-CSRF-Token") || "no token";


  return (
    <CreateContentStyled onSubmit={handleSubmit} theme={theme}>
      {/* <h1>Create a Task</h1> */}
      {/* <input type="hidden" name="csrf_token" value={csrfToken} /> */}
      <div className="header">
        <h1>{editTask ? "Edit Task" : "Create a Task"}</h1>
        <FaTimes className="close-icon" onClick={handleClose} />
      </div>
      <div className="input-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          name="title"
          onChange={handleChange("title")}
          placeholder="Your title or upcoming goals to achieve."
        />
      </div>
      <div className="input-control">
        <label htmlFor="description">Description</label>
        <textarea
          value={description}
          onChange={handleChange("description")}
          name="description"
          id="description"
          rows={4}
          placeholder="write about you task......."
        ></textarea>
      </div>
      <div className="input-control">
        <label htmlFor="date">Date</label>
        <input className="text-black"
          value={date}
          onChange={handleChange("date")}
          type="date"
          name="date"
          id="date"
        />
      </div>
      <div className="input-control toggler">
        <div className="toggle-group">
          <div className="toggle-item">
            <label htmlFor="completed">Toggle Completed</label>
            <input
              value={completed.toString()}
              onChange={handleChange("completed")}
              type="checkbox"
              name="completed"
              id="completed"
            />
          </div>
          <div className="toggle-item">
            <label htmlFor="important">Toggle Important</label>
            <input
              value={important.toString()}
              onChange={handleChange("important")}
              type="checkbox"
              name="important"
              id="important"
            />
          </div>
        </div>
      </div>
      <div className="submit-btn flex justify-end">
        <Button
          type="submit"
          // name="Create Task"
          name={editTask ? "Update Task" : "Create Task"}
          icon={add}
          padding={"0.6rem 1rem"}
          borderRad={"0.8rem"}
          fw={"500"}
          fs={"1rem"}
          background={"#6374CB"}
        />
      </div>
    </CreateContentStyled>
  );
}


const CreateContentStyled = styled.form`
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 1rem;
  color: ${(props) => props.theme.colorPrimary};

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: clamp(1.2rem, 5vw, 1.6rem);
      font-weight: 600;
      color: #6374CB;
    }

    .close-icon {
      font-size: 1.5rem;
      cursor: pointer;
      color: ${(props) => props.theme.colorPrimary};
      transition: color 0.3s ease;

      &:hover {
        color: ${(props) => props.theme.colorDanger};
      }
    }
  }



  .input-control {
    position: relative;
    margin: 1rem 0;
    font-size: 16px;
    @media screen and (max-width: 450px) {
      margin: 1rem 0;
    }

    label {
      color: #6374CB;
      margin-bottom: 0.2rem;
      display: inline-block;
      font-size: 18px;
      span {
        color: ${(props) => props.theme.colorGrey3};
      }
    }

    input, textarea{
      box-shadow: 0px 1px 5px -0.8px;
      // background-color: #f2f0f0;
      color: black;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.7rem;
      resize: none;
      // color: #b5c2d2;
      border-radius: 0.5rem;
      // background-color: ${(props) => props.theme.colorGreyDark};
      // color: ${(props) => props.theme.colorGrey2};
    }
  }

  .submit-btn button {
    transition: all 0.35s ease-in-out;
    margin-top: 5px;

    @media screen and (max-width: 500px) {
      font-size: 0.9rem !important;
      padding: 0.6rem 1rem !important;

      i {
        font-size: 1.2rem !important;
        margin-right: 0.5rem !important;
      }
    }

    i {
      color: ${(props) => props.theme.colorGrey0};
    }

    &:hover {
      background: ${(props) => props.theme.colorPrimaryGreen} !important;
      color: ${(props) => props.theme.colorWhite} !important;
    }
  }

  .toggler {
    margin-top: 35px;
    .toggle-group {
      display: flex;
      flex-wrap: wrap;
      gap: 0.2rem;
      justify-content: space-between;
    }

    .toggle-item {
      display: flex;
      align-items: center;

      label {
        margin-right: 0.5rem;
      }

      input {
        width: 19px;
      }
    }
  }
`;

export default CreateContent;

