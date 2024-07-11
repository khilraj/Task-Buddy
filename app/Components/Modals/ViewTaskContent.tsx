"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { FaTimes } from "react-icons/fa"

function ViewTaskContent() {
  const { theme, viewTask, closeModal } = useGlobalState();

  const handleClose = () => {
    closeModal();
    window.location.reload(); // Refresh the page to reset the form states
  };

  if (!viewTask) return null;

  return (
    <ViewTaskContentStyled theme={theme}>
      <div className="header">
        <h1>View Task</h1>
        <FaTimes className="close-icon" onClick={handleClose} />
      </div>
      <div className="input-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={viewTask.title}
          name="title"
          readOnly
        />
      </div>
      <div className="input-control">
        <label htmlFor="description">Description</label>
        <textarea
          value={viewTask.description}
          name="description"
          id="description"
          rows={4}
          readOnly
        ></textarea>
      </div>
      <div className="input-control">
        <label htmlFor="date">Date</label>
        <input
          className="text-black"
          value={viewTask.date}
          type="date"
          name="date"
          id="date"
          readOnly
        />
      </div>
      <div className="input-control toggler">
        <div className="toggle-group">
          <div className="toggle-item">
            <label htmlFor="completed">Completed</label>
            <input
              checked={viewTask.isCompleted}
              type="checkbox"
              name="completed"
              id="completed"
              readOnly
            />
          </div>
          <div className="toggle-item">
            <label htmlFor="important">Important</label>
            <input
              checked={viewTask.isImportant}
              type="checkbox"
              name="important"
              id="important"
              readOnly
            />
          </div>
        </div>
      </div>
      
    </ViewTaskContentStyled>
  );
}

const ViewTaskContentStyled = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 1rem;
  // box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
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

    input,
    textarea {
      box-shadow: 0px 1px 5px -0.8px;
      color: black;
      width: 100%;
      padding: 0.7rem;
      resize: none;
      border-radius: 0.5rem;
    }

    input[readonly],
    textarea[readonly] {
      background-color: ${(props) => props.theme.colorGreyLight};
      cursor: not-allowed;
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

export default ViewTaskContent;
