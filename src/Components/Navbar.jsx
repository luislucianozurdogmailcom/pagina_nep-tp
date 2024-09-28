import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "../Assets/AcmeLogo";
import ImageContainer from "../Assets/ImageContainer";

export default function App(page) {
  const menuItems = [
    "Home",
    "Group",
    "Research",
    "Publications",
    "Colaborations",
    "New Events",
    "Contact"
  ];

  console.log(page.page)

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 w-full" justify="center">
        <ImageContainer src='./Assets/imagen_grupo.png' w='12' alt='' className=''></ImageContainer>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
            <ImageContainer src='./Assets/imagen_grupo.png' w='12' alt='' className=''></ImageContainer>
            {/*<p className="font-bold text-inherit">NEP&TP</p>*/}
        </NavbarBrand>
        <NavbarItem isActive={page.page == 'home'}>
          <Link href="#" color={page.page == 'home' ? 'warning' : 'foreground'}>
            NEP&TP
          </Link>
        </NavbarItem>
        
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
      <NavbarItem isActive={page.page == 'Home'}>
          <Link href="/home" color={page.page == 'Home' ? 'warning' : 'foreground'}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={page.page == 'Group'}>
          <Link href="/group" color={page.page == 'Group' ? 'warning' : 'foreground'}>
            Group 
          </Link>
        </NavbarItem>
        <NavbarItem isActive={page.page == 'Research'}>
          <Link href="/research" color={page.page == 'Research' ? 'warning' : 'foreground'}>
            Research
          </Link>
        </NavbarItem>
        <NavbarItem isActive={page.page == 'Publications'}>
          <Link href="/publications" color={page.page == 'Publications' ? 'warning' : 'foreground'}>
            Publications
          </Link>
        </NavbarItem>
        <NavbarItem isActive={page.page == 'Colaborations'}>
          <Link href="#" color={page == 'Colaborations' ? 'warning' : 'foreground'}>
            Colaborations
          </Link>
        </NavbarItem>
        <NavbarItem isActive={page.page == 'New Events'}>
          <Link href="#" color={page == 'New Events' ? 'warning' : 'foreground'}>
            New Events
          </Link>
        </NavbarItem>
        <NavbarItem isActive={page.page == 'Contact'}>
          <Link href="#" color={page == 'Contact' ? 'warning' : 'foreground'}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                item == page.page ? 'warning' : 'foreground'
              }
              href={`/${item}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
