import { Injectable } from '@angular/core';

export interface Children {
    name: string;
    state: string;
    type: string;
}

export interface Menu {
    name: string;
    state: string;
    type: string;
    icon: string;
    children?: Children[];
}

const Menus = [
    {
        name: 'Home',
        state: 'home',
        type: 'link',
        icon: 'home',
    },
    {
        name: 'Tutorials',
        state: 'tutorials',
        type: 'link',
        icon: 'slideshow',
    },
    {
        name: 'Blog',
        state: 'blog',
        type: 'link',
        icon: 'cloud',
    },
    {
        name: 'Contact',
        state: 'contact',
        type: 'link',
        icon: 'contact_support',
    }
];

@Injectable()
export class MenuItems {
    constructor() { }

    getAll(): Menu[] {
        return Menus;
    }
}
