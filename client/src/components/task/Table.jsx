import clsx from 'clsx';
import React, { useState } from 'react'
import { BiMessageAltDetail } from 'react-icons/bi'
import {
    MdAttachFile,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { toast } from 'sonner';
import { PRIOTITYSTYELS, TASK_TYPE } from '../../utils';

const ICONS = {
    high: <MdKeyboardDoubleArrowUp />,
    medium: <MdKeyboardArrowUp />,
    low: <MdKeyboardArrowDown />,
};

const Table = ({ tasks }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selected, setSelected] = useState(null);

    const TableHeader = ()=> (
        <thead className='border-b border-gray-300'>
          <tr className='text-black text-left'>
            <th className='py-2'>Task Title</th>
            <th className='py-2'>Priority</th>
            <th className='py-2'>Team</th>
            <th className='py-2 hidden md:block'>Created At</th>
          </tr>
        </thead>
    );

    const TableRow = ({ task }) => (
        <tr className='border-b border-gray-200 text-gray-600 hover:bg-gray-300/10'>
            <td className='py-2'>
                <div className='flex items-center gap-2'>
                    <div 
                        className={clsx("w-4 h-4 rounded-full", TASK_TYPE[task.stage])}
                    />
                    <p className='w-full line-clamp-2 text-base text-black'>
                        {task?.title}
                    </p>
                </div>
            </td>

            <td className='py-2'>
                <div className='flex gap-1 items-center'>
                    <span className={clsx("text-lg", PRIOTITYSTYELS[tasks?.priority])}>   
                        {ICONS[task?.priority]}
                    </span>
                    <span className='capitalize line-clamp-1'>
                        {task?.priority} Priority
                    </span>
                </div>
            </td>
        </tr>
    );

  return (
    <>
      <div className='bg-white px-2 md:px-4 pt-4 pb-9 shadow-md rounded'>
        <div className='overflow-x-auto'>
            <table className='w-full'>
                <TableHeader />
                    <tbody>
                        {tasks?.map((task, index)=> (
                            <TableRow key={index} task={task} />
                        ))}
                    </tbody>
            </table>
        </div>
      </div>
    </>
  );
};

export default Table