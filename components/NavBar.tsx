"use client";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link,
} from "@heroui/react";

export default function NavBar() {
  return (
   <Navbar isBordered position="sticky" className=" p-3">
      <NavbarBrand >
        <p className="font-bold text-inherit">Dhinesh Ponnappan</p>
      </NavbarBrand>
    
    <NavbarContent className="hidden sm:flex gap-4 font-bold" justify="center">
      <NavbarItem as={Link} href="#">
        Home
      </NavbarItem>
      <NavbarItem as={Link} href="#about">
        About Me
      </NavbarItem>
      <NavbarItem as={Link} href="#projects" >
        Projects
      </NavbarItem>
      <NavbarItem as={Link} href="#experience">
        Experience
      </NavbarItem>
      
    </NavbarContent>
   </Navbar>
  );
}