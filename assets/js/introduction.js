'use strict';

const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach((tooltips) => {
  const url = tooltips.dataset.url;
  const linkSrc = tooltips.dataset.tooltipContent;
  const tooltipType = tooltips.dataset.tooltipType;
  const tooltipContent = tooltips.dataset.tooltipContent;

  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', `${url}`);
  linkElement.textContent = ' ' + tooltips.textContent;

  const spanElement = document.createElement('span');
  spanElement.classList.add('tooltip__box', `tooltip__box--${tooltipType}`);
  spanElement.textContent = tooltipContent;
  tooltips.textContent = '';
  if (tooltipType === 'image') {
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', `${linkSrc}`);
    imgElement.classList.add('tooltip__image');
    spanElement.textContent = '';
    spanElement.appendChild(imgElement);
  }

  tooltips.appendChild(linkElement);
  tooltips.appendChild(spanElement);
});
