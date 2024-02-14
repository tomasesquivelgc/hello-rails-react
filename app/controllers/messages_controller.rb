class MessagesController < ApplicationController
  # RANDOM action for the API
  def random
    @message = Message.order('RANDOM()').first
    render json: @message
  end
end
