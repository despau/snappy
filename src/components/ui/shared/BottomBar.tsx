import { bottombarLinks } from '@/constants';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BottomBar = () => {


  const { pathname } = useLocation();

  return (
    <section className="bottom-bar">
      { bottombarLinks.map((link) => {

        const isActive = pathname === link.route;

        return (
            <li key={link.label} className={`leftsidebar-link group ${isActive && 'bg-primary-500'}`}>
                <Link
                    to={link.route}
                    key={link.label} className={`${isActive && 'bg-primary-500 rounded-[10px]'} flex-center flex-col gap-1 p-2 transition`}
                >
                    <img 
                        src={link.imgURL}
                        alt={ link.label }
                        width={16}
                        height={16}
                        className={`group-hover:invert-white  ${isActive && 'invert-white'}`}
                    />
                    <p className="tiny-medium text-light-2 ">{link.label}</p>
                </Link>
            </li>
        )
      }) }
    </section>
  )
}

export default BottomBar