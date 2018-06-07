import React from 'react'
import Parser from 'html-react-parser';

export const Header = ({children, className='', id=''}) => (
    <header className={className} id={id}>
        {children}
    </header>
);


export const Main = ({children, className='', id=''}) => (
    <main className={className} id={id}>
        {children}
    </main>
);

export const Ul = ({children, className='', id=''}) => (
    <ul className={className} id={id}>
        {children}
    </ul>
);
export const Li = ({children, className='', id=''}) => (
    <li className={className} id={id}>
        {children}
    </li>
);

export const Span = ({children, className='', id=''}) => (
    <span className={className} id={id}>
        {children}
    </span>
);

export const Ahref = ({children, className='', id='', href=''}) => (
    <a href={href} className={className} id={id}>
        {children}
    </a>
);

export const Img = ({className='', id='', src='', alt=''}) => (
    <img className={className}
         src={src}
         alt={alt}
    />
);

export const Hnum = ({children, className='', id='', num=1}) => (
    Parser(`<h${num} className=${className} id=${id}>${children}</h${num}`)
);