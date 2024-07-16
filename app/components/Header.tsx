"use client";
import {
    Button,
    Navbar
} from 'flowbite-react'
import { ComponentProps } from 'react'
import { usePathname }    from "next/navigation";

export const Header: React.FC<ComponentProps<any>> = ({children}) => {
    const pathname = usePathname();
    const navItems = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'About',
            href: '/'
        },
        {
            title: 'Contact',
            href: '/'
        },
        {
            title: 'FAQ',
            href: '/'
        }
    ]
    return (
        <Navbar
            fluid
            rounded
            className={'w-full py-4'}
        >
            <Navbar.Brand href="/">
                <img
                    src="https://cdn.connectto.world/logo.svg"
                    className="h-10 sm:h-14 md:h-10"
                    alt="Bookadot"
                />
            </Navbar.Brand>
            <Navbar.Collapse>
                <div className={'bookadot-header-item invisible flex flex-col justify-between gap-5 md:visible md:flex-row xl:gap-10'}>
                    {navItems.map((navItem, index) => (
                        <Navbar.Link href={navItem.href}
                                    active={[ navItem.href ].includes(pathname)}
                                    key={index}
                        >{navItem.title}</Navbar.Link>
                    ))}
                </div>
            </Navbar.Collapse>
            <Button color={'bookadot-secondary'}>Connect</Button>
        </Navbar>
    )
}
