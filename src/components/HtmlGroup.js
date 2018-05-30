import React from 'react'

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

export const Img = ({className='', id='', src='', alt=''}) => (
    <img className={className}
         src={src}
         alt={alt}
    />
);