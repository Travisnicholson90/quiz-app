import { useEffect, useState } from 'react';
import { Menu } from '@headlessui/react';
import settings from '../../assets/images/settings.svg';

// pass in handleMenuItemClick as a prop from Dashboard.jsx
const MenuDisclosure = ({ handleMenuItemClick }) => {

    return (
    <div className='flex flex-col'>
        <Menu>
            <div className='flex w-full items-center'>
                <Menu.Button className='text-xl font-bold text-navy tracking-widest ml-auto'>
                    <img className='w-7' src={settings} alt="settings" />
                </Menu.Button>
            </div>
           
            <Menu.Items className='top-10 flex flex-col text-purple-500 text-lg font-bold tracking-wide mt-5 gap-3'>
                <Menu.Item>
                {({ active }) => (
                    <a
                    className={`${active && 'bg-blue-500'}`}
                    onClick={() => handleMenuItemClick('account')}
                    >
                    Account
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    className={`${active && 'bg-blue-500'}`}
                    onClick={() => handleMenuItemClick('scores')}
                    >
                    High Scores
                    </a>
                )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    </div>
    )
};

export default MenuDisclosure;