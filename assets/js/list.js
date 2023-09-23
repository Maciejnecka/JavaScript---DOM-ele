'use strict';
const list = [
  {
    id: 1,
    parentId: null,
    text: 'Zastosowanie',
    link: '#Zastosowanie',
  },
  {
    id: 44,
    parentId: null,
    text: 'Historia',
    link: '#Historia',
  },
  {
    id: 7,
    parentId: 44,
    text: 'Dialekty',
    link: '#Dialekty',
  },
  {
    id: 31,
    parentId: 44,
    text: 'Java',
    link: '#Java',
  },
  {
    id: 24,
    parentId: null,
    text: 'JavaScript dla WWW',
    link: '#JavaScript_dla_WWW',
  },
  {
    id: 10,
    parentId: 24,
    text: 'Interakcja',
    link: '#Interakcja',
  },
  {
    id: 25,
    parentId: 24,
    text: 'Osadzanie',
    link: '#Osadzanie',
  },
];

const articleList = document.querySelector('.article__list');
const newUl = document.createElement('ul');
articleList.appendChild(newUl);

list.forEach((item) => {
  if (item.parentId === null) {
    const newLi = document.createElement('li');
    newLi.dataset.id = item.id;
    const newA = document.createElement('a');
    newA.textContent = item.text;
    newA.setAttribute('href', item.link);
    newUl.appendChild(newLi);
    newLi.appendChild(newA);
  }
});

const liElements = articleList.querySelectorAll('li');

liElements.forEach((liEle) => {
  const parentId = Number(liEle.getAttribute('data-id'));
  const childrenId = list.filter(function (element) {
    return element.parentId === parentId;
  });
  if (childrenId.length !== 0) {
    const ulSecondParent = document.createElement('ul');
    liEle.appendChild(ulSecondParent);

    childrenId.forEach((item) => {
      const childLiElement = document.createElement('li');
      const childAElement = document.createElement('a');
      childAElement.textContent = item.text;
      childAElement.setAttribute('href', item.link);
      ulSecondParent.appendChild(childLiElement);
      childLiElement.appendChild(childAElement);
    });
  }
});
