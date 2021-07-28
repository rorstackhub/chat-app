// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import "bootstrap"
import './src/application.scss'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// navbar js

$(document).ready(function() {
  if (window.location.href.indexOf("sign_up") > -1) {
    $(".sign-up-link").hide()
  }else{
    $(".login-link").hide()
  }

  // Private chat
  (function() {
    $(document).on('click', '.toggle-window', function(e) {
      e.preventDefault();
      var panel = $(this).parent().parent();
      var messages_list = panel.find('.messages-list');

      panel.find('.panel-body').toggle();
      panel.attr('class', 'panel panel-default');

      if (panel.find('.panel-body').is(':visible')) {
        var height = messages_list[0].scrollHeight;
        messages_list.scrollTop(height);
      }
    });
  })();

  // Send input box clear
  $('#new_room_message').on('submit', function(){
    $('#room_message_message').val(' ')
  });
});