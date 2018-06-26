import React from 'react'
import Parser from 'html-react-parser';

export const Header = ({children, className='', id='', style={}}) => (
    <header className={className} id={id} style={style}>
        {children}
    </header>
);


export const Main = ({children, className='', id=''}, style={}) => (
    <main className={className} id={id} style={style}>
        {children}
    </main>
);

export const Ul = ({children, className='', id=''}, style={}) => (
    <ul className={className} id={id} style={style}>
        {children}
    </ul>
);
export const Li = ({children, className='', id='', onClick=null, style={}}) => (
    <li className={className} id={id} onClick={onClick} style={style}>
        {children}
    </li>
);

export const Span = ({children, className='', id='', style={}}) => (
    <span className={className} id={id} style={style}>
        {children}
    </span>
);

export const Ahref = ({children, className='', id='', href='', target='blank', style={}}) => (
    <a href={href} className={className} id={id} target={target} style={style}>
        {children}
    </a>
);

export const Img = ({className='', id='', src='', alt='', style={}}) => (
    <img className={className}
         style={style}
         src={src}
         alt={alt}
    />
);

export const Hnum = ({children, className='', id='', num=1}) => (
    Parser(`<h${num} className=${className} id=${id}>${children}</h${num}`)
);