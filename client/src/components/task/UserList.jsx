import { summary } from '../../assets/data'
import { Listbox, ListboxButton, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { BsChevronExpand } from "react-icons/bs";
import { MdCheck } from "react-icons/md"; 


const UserList = ({ setTeam, team }) => {
    const data = summary.users;
    const [selectedUsers, setSelectedUsers] = useState([]);

    const handleChange = (el)=> {
        setSelectedUsers(el)
        setTeam(el.map((u) => u._id));
    };

  return (
    <div>
        <p className='text-gray-700'>Assign Task To: </p>
        <Listbox
            value={selectedUsers}
            onChange={(el) => handleChange(el)}
            multiple
        >
            <div className='relative mt-1'>
                <ListboxButton className='relative w-full cursor-default rounded bg-white pl-3 pr-10 text-left px-3 py-2.5 2xl:py-3 border border-gray-300 sm:text-sm'>
                    
                </ListboxButton>
            </div>
        </Listbox>
    </div>
  )
}

export default UserList