import React from 'react';

function Lightbox({ src, onClose }) {
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div onClick={onClose} className="lightbox-backdrop">
        <div onClick={stopPropagation} className="lightbox-content">
            <img src={src} alt="Expanded view" />
        </div>
        </div>
    );
}

export default Lightbox;
