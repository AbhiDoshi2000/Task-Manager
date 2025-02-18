import { summary } from '../../assets/data'
import { Listbox, ListboxButton, ListboxOptions, Transition } from "@headlessui/react";
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
                    <span
                        className='block truncate'
                    >
                        {selectedUsers?.map((user) => user.name).join(", ")}
                    </span>

                    <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                        <BsChevronExpand 
                            className='h-5 w-5 text-gray-400'
                            aria-hidden='true'
                        />
                    </span>
                </ListboxButton>

                <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >

                    <ListboxOptions className='z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>

                    </ListboxOptions>
                </Transition>
            </div>
        </Listbox>
    </div>
  )
}

export default UserList