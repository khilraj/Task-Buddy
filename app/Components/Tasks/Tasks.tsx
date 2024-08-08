"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";
import CreateContent from "../Modals/CreateContent";
import TaskItem from "../TaskItem/TaskItem";
import { add, plus } from "@/app/utils/Icons";
import Modal from "../Modals/Modal";
import ViewTaskContent from "../Modals/ViewTaskContent";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import DOMPurify from 'dompurify';

interface Props {
  title: string;
  tasks: any[];
}

function Tasks({ title, tasks }: Props) {
  const { theme, modal, modalType, openModal } = useGlobalState();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      const role = user.publicMetadata?.role;
      if (role === "admin") {
        router.push("/admin-dashboard");
      }
    }
  }, [user, router]);

  const handleCreateTaskClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    openModal("create");
  };

  const sanitize = (input: string) => DOMPurify.sanitize(input);
  
  return (
    <TaskStyled theme={theme}>
      {/* {modal && <Modal content={<CreateContent />} />} */}
      {modal && (
        <Modal content={modalType === "create" ? <CreateContent /> : modalType === "view" ? <ViewTaskContent /> : <CreateContent />} />
      )}
      <h1>{title}</h1>

      <button className="btn-rounded" onClick={handleCreateTaskClick}>
        {plus}
      </button>

      <div className="tasks grid">
        {tasks.map((task) => (
            <TaskItem
              key={task.id}
              title={sanitize(task.title)}
              description={sanitize(task.description)}
              date={sanitize(task.date)}
              isCompleted={task.isCompleted}
              id={task.id}
          />          
        ))}
        <button className="create-task" onClick={handleCreateTaskClick}>
          {add}
          Add New Task
        </button>

       
      </div>
    </TaskStyled>
  );
}

const TaskStyled = styled.main`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 2rem;
  padding-left: 3rem;
  position: relative;
  width: 100%;
  background-color: white;
  border: 2px solid ${(props) => props.theme.borderColor2};
  height: 100%;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  .btn-rounded {
    position: fixed;
    top: 3rem;
    right: 2.6rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #6374CB;
    border: 2px solid ${(props) => props.theme.borderColor2};
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
    color: ${(props) => props.theme.colorGrey2};
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      top: 3rem;
      right: 3.5rem;
    }
  }

  .tasks {
    margin: 2rem 0;
  }

  > h1 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 800;
    position: relative;
    color: #6374CB;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 3rem;
      height: 0.2rem;
      background-color: ${(props) => props.theme.colorPrimaryGreen};
      border-radius: 0.5rem;
    }
  }

  .create-task {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    height: 14rem;
    color: #6374CB;
    font-weight: 600;
    cursor: pointer;
    border-radius: 1rem;
    box-shadow: 3px 3px 9px -1.6px;
    transition: all 0.3s ease;

    i {
      font-size: 1.5rem;
      margin-right: 0.2rem;
    }

    &:hover {
      background-color: ${(props) => props.theme.colorGrey5};
      color: ${(props) => props.theme.colorGrey0};
    }
  }
`;

export default Tasks;

