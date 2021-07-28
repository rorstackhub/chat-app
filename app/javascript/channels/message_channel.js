import consumer from "./consumer"

consumer.subscriptions.create(
  {
    channel: "MessageChannel"
  },
  {
    received: function(data) {
    var message_content = $('.message-container').clone()
    message_content.find('.message-body').text(data.message.body)
    var conversation = $('#conversations-list').find("[data-conversation-id='" + data.conversation.id + "']");
    conversation.find('.messages-list').find('ul').append(message_content);
    conversation.find('.message-send-btn').attr('disabled', false);
    }
  }
);
