"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import { edit, trash } from "@/app/utils/Icons";
import React, { useState } from "react";
import styled from "styled-components";
import formatDate from "@/app/utils/formatDate";
import { FaExpand } from "react-icons/fa";
import ConfirmationModal from "./ConfirmationModal";

interface Props {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  id: string;
}

function TaskItem({ title, description, date, isCompleted, id }: Props) {
  const { theme, deleteTask, updateTask, openModal, setEditTask, openNewModel, setViewTask } = useGlobalState();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const Description = description.length > 90
    ? description.substring(0, 90) + "..."
    : description;

  const handleView = () => {
    setViewTask({ id, title, description, date, isCompleted, important: false }); // Add other fields as needed
    openModal("view");
  };

  const handleEdit = () => {
    setEditTask({ id, title, description, date, isCompleted, important: false });
    openModal('edit');
  };


  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    deleteTask(id);
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      {showDeleteModal && (
        <ConfirmationModal
          message="Do you really want to delete this task?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
      
      <TaskItemStyled theme={theme}>
        <div className="header">
          <h1>{title}</h1>
          <FaExpand className="view-icon" onClick={handleView} />
        </div>
        <p>{Description}</p>
        <p className="date">{formatDate(date)}</p>
        <div className="task-footer">
          {isCompleted ? (
            <button
              className="completed"
              onClick={() => {
                const task = {
                  id,
                  isCompleted: !isCompleted,
                };
                updateTask(task);
              }}
            >
              Completed
            </button>
          ) : (
            <button
              className="incomplete"
              onClick={() => {
                const task = {
                  id,
                  isCompleted: !isCompleted,
                };
                updateTask(task);
              }}
            >
              Incomplete
            </button>
          )}
          <button
            type="button"
            className="edit"
            onClick={handleEdit}
          >
            {edit}
          </button>
          <button
            className="delete"
            onClick={handleDelete}
            // onClick={() => {
            //   deleteTask(id);
              
            // }}
          >
            {trash}
          </button>
        </div>
      </TaskItemStyled>
    </>

  );
}

const TaskItemStyled = styled.div`
  padding: 0.6rem 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.borderColor2};
  box-shadow: 3px 3px 9px -1.6px ${(props) => props.theme.shadowColor};
  border: 2px solid ${(props) => props.theme.borderColor2};
  color: black;

  // height: 14rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 15px -2px ${(props) => props.theme.shadowColor};
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .view-icon {
      font-size: 1.2rem;
      cursor: pointer;
      color: ${(props) => props.theme.colorPrimary};
      transition: color 0.3s ease;

      &:hover {
        color: ${(props) => props.theme.colorDanger};
      }
    }
  }

  

  .date {
    margin-top: auto;
  }

  .header h1 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .task-footer {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    button {
      border: none;
      outline: none;
      cursor: pointer;

      i {
        font-size: 1.4rem;
        color: ${(props) => props.theme.colorGrey2};
      }
    }

    .edit {
      margin-left: auto;
      filter: drop-shadow(2px 4px 3px green);
    }

    .delete {
      filter: drop-shadow(2px 4px 3px red);
    }

    .completed,
    .incomplete {
      display: inline-block;
      padding: 0.4rem 1rem;
      background: ${(props) => props.theme.colorDanger};
      border-radius: 30px;
    }

    .completed {
      background: ${(props) => props.theme.colorGreenDark} !important;
    }
  }
`;

export default TaskItem;
