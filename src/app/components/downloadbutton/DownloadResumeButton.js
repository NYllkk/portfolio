
import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
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