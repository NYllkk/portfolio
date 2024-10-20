
import React from 'react';
"C:\Users\NIKHIL SHARMA\Downloads\Er.Nikhil.Dev.Resume.pdf (1).pdf"
import { Icon } from '@iconify/react/dist/iconify.js';
// import {} from "/resume.pdf"
const DownloadResumeButton = () => {
    return (
        <div >
            <a className="save_btn" href="/resume.pdf" download>Resume
                <Icon className="icon"
                    icon="material-symbols:arrow-downward-rounded" />
            </a>
        </div>
    );
};

export default DownloadResumeButton;