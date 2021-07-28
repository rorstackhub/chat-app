class MessagesController < ApplicationController
  def create
    @conversation = Conversation.includes(:recipient).find(params[:conversation_id])
    @message = @conversation.messages.create(message_params)

    ActionCable.server.broadcast "message_channel", conversation: @conversation, message: @message
  end

  private

  def message_params
    params.require(:message).permit(:user_id, :body)
  end
end
