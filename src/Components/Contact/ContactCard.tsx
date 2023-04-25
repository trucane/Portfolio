import React, { useState } from 'react';


type Props = {
    title: string;
    logo: string;
    link: string;
}


export const ContactCard = ({title, logo, link}: Props) => {

    const [copied, setCopied] = useState<boolean>(false);


    const copyClipboard = (value: string) => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };


    return <div className="contact-card" data-title={title}>
        {copied &&(
            <div className="copied-message">copied to clipboard</div>
        )}
        <div className="logo" data-id={logo}><img alt={`logo-${title}`} src={logo} /></div>
        <div className="url" ><span onClick={() => copyClipboard(link)}>{link}</span></div>
        <div className="link">
            <a href={link}> {`${title} profile`}</a>
            </div>
    </div>;
};