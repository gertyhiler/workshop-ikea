'use strict';

const generateOverlay = () => {
    const overlay = ` 
    <div class="overlay"></div>
    `;
    document.body.insertAdjacentHTML('beforeend', overlay);
};

generateOverlay();