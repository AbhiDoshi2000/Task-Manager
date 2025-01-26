import React from 'react';
import { MdGridView } from "react-icons/md";
import { FaList } from "react-icons/fa"; 
import { useParams } from 'react-router-dom';
import { useState } from 'react';


const TABS = [
  { title: "Board View", icon: <MdGridView />},
  { title: "List View", icon: <FaList />},
];

const TASK_TYPE = {
  todo: "bg-blue-600",
  "in progress": "bg-yello-600",
  completed: "bg-green-600",
};

const Tasks = () => {
  const params = useParams();

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);

  return <div>Tasks</div>
}

export default Tasks