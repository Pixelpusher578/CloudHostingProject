import React from 'react';
import {GrTechnology}from "react-icons/gr"
import Link from "next/link";
const Header = () => {
    return (
       <header className={"flex "}>
           <nav>
               <div className={"flex bg-rose-400"}>
               CLOUD
               <GrTechnology/>
               HOSTING
               </div>
               <ul className={"flex"}>
                   <Link href="/">Home</Link>
                   <Link href="/about">about</Link>
                   <Link href="/admin">admin</Link>
                   <Link href="/article">article</Link>
               </ul>
           </nav>
           <div className={"flex"}>
               <Link href="/login">about</Link>
               <Link href="/register">register</Link>
           </div>
       </header>
    );
};

export default Header;