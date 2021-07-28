Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  devise_for :users
  root controller: :rooms, action: :index

  resources :room_messages
  resources :rooms

  resources :conversations, only: [:create] do
    member do
      post :close
    end

    resources :messages, only: [:create]
  end
  get '/home', to: 'home#index', as: 'home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
