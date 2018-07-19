'use strict';
/* global $ */

function addItem() {
  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    const item = $('input').val();

    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    deleteItem();
    toggleCheck();
  });
}

function deleteItem() {
  $('.shopping-item-delete').click(function(){
    $(this).parent().parent().remove();
  });
}

function toggleCheck() {
  $('.shopping-item-toggle').click(function(){
    $(this).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked');
  });
}

$(function() {
  addItem();
  deleteItem();
  toggleCheck();
});