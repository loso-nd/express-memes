Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :orders, only: [:show, :create]
  resources :items, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:create]
  resources :stores
  resources :log_in, only: [:create]
end
