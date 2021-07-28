import consumer from "./consumer";

$(function () {
  $('[data-channel-subscribe="room"]').each(function (index, element) {
    var $element = $(element),
      room_id = $element.data("data-room-id");

    $element.animate({ scrollTop: $element.prop("scrollHeight") }, 1000);

    consumer.subscriptions.create(
      {
        channel: "RoomChannel",
        room: room_id,
      },
      {
        received: function (data) {
          if ($element) {
            var content = $('[data-role="message-template"]').children().clone(true, true);
            content
              .find('[data-role="user-avatar"]')
              .attr("src", data.message.user_avatar_url);
            content
              .find('[data-role="message-text"]')
              .text(data.message.message);
            content
              .find('[data-role="message-date"]')
              .text(data.message.updated_at);
            $element.append(content);
            $element.animate(
              { scrollTop: $element.prop("scrollHeight") },
              1000
            );
          } else {
            var content = $('[data-role="message-template"]').children().clone(true, true);
            content
              .find('[data-role="user-avatar"]')
              .attr("src", data.message.user_avatar_url);
            content
              .find('[data-role="message-text"]')
              .text(data.message.message);
            content
              .find('[data-role="message-date"]')
              .text(data.message.updated_at);
            $element.append(content);
          }
        },
      }
    );
  });
});
