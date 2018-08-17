Rails.application.routes.draw do
  resources :videos
  resources :comments
  resources :projects
  resources :teams
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
