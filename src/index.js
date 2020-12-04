import {UserInfo, userInfo, popupAuthor} from './js/components/UserInfo_11'
import {PopupHolder} from './js/components/Popup_11'
import {PhotoPopup} from './js/components/PhotoPopup_11'
// import {editProfile} from './Global'
import {renderLoading} from './js/components/renderLoading_11'
import FormValidator from './js/components/FormValidator_11'
import {CardList, cardList, popupNewCard} from './js/components/CardList_11'
import {Card} from './js/components/Card_11'
import Api from './js/api/Api_11'
import {createNewCard} from './js/components/Card_11'

import './pages/index.css'


const userInfoButton = document.querySelector('.user-info__button');
const editButton = document.querySelector('.user-info__edit-button');
const avatarPlace = document.querySelector('.user-info__photo')

userInfo.renderUser();

cardList.getInitialCards();

const popupAvatar = new PopupHolder (false, 'newAvatar', document.querySelector('.template.new-avatar').content, userInfo.newAvatar, 'undefined'
  // .bind(event, popup)
);

function addButtonHandler() {
// открываем попап
  popupNewCard.open(["",""]);
}

function editButtonHandler() {
  const userInfoName = document.querySelector('.user-info__name');
  const userInfoJob = document.querySelector('.user-info__job');

  popupAuthor.open([userInfo.retrieveUser().name, userInfo.retrieveUser().about]);

}

function newAvatarHandler() {
  // открываем попап
  popupAvatar.open([""]);
}


// кнопка добавления карточки
userInfoButton.addEventListener('click', addButtonHandler);
// кнопка редактирования автора
editButton.addEventListener('click', editButtonHandler);
// кнопка редактирования аватара
avatarPlace.addEventListener('click', newAvatarHandler);




