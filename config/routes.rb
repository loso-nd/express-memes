Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :orders, only: [:show, :create]
  resources :items, only: [:index, :show, :create, :update, :destroy]
<<<<<<< HEAD
  resources :users, only: [:index, :create]
=======
  resources :users, only: [:create]
>>>>>>> 228fa657b937d9978b3f579651a693202228b3b0
  resources :stores
  resources :log_in, only: [:create]
end
