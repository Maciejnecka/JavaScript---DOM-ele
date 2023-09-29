'use strict';

const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach((tooltips) => {
  const url = tooltips.dataset.url;
  const linkSrc = tooltips.dataset.tooltipContent;
  const tooltipType = tooltips.dataset.tooltipType;
  const tooltipContent = tooltips.dataset.tooltipContent;

  const linksElement = createTooltipLinks(url, tooltips);

  const spanElement = createTooltipText(tooltipType, tooltipContent);

  if (tooltipType === 'image') {
    // createTooptipImage
    const imgElement = createTopptipImage(linkSrc);
    spanElement.textContent = '';
    spanElement.appendChild(imgElement);
  }
  tooltips.appendChild(linksElement);
  tooltips.appendChild(spanElement);
});

function createTooltipLinks(url, tooltips) {
  const linksElement = document.createElement('a');
  linksElement.setAttribute('href', url);
  linksElement.textContent = ' ' + tooltips.textContent;
  return linksElement;
}

function createTooltipText(tooltipType, tooltipContent) {
  const spanElement = document.createElement('span');
  spanElement.classList.add('tooltip__box', `tooltip__box--${tooltipType}`);
  spanElement.textContent = tooltipContent;
  tooltips.textContent = '';
  return spanElement;
}

function createTopptipImage(linkSrc) {
  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', linkSrc);
  imgElement.classList.add('tooltip__image');
  return imgElement;
}
