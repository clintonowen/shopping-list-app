'use strict';
/* global $ */

function addItem() {
  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    const item = $('.js-shopping-list-entry').val();

    try {
      if (!item) {
        throw new Error('Please input a valid item.');
      } else {
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
    
        $('#js-shopping-list-form')[0].reset();
      }
    } catch (e) {
      alert(e);
    }
  });
}

function deleteItem() {
  $('ul').on('click', '.shopping-item-delete', function() {
    $(this).closest('li').remove();
  });
}

function toggleCheck() {
  $('ul').on('click', '.shopping-item-toggle', function() {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}

$(function() {
  addItem();
  deleteItem();
  toggleCheck();
});