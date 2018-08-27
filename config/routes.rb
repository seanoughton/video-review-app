Rails.application.routes.draw do
  resources :videos
  resources :comments
  resources :projects
  resources :teams
  resources :users

  #get 'login' => 'sessions#new', as: 'login'
  #get 'login' => 'users#login'
  post 'login' => 'users#login'
  #post 'login' => 'sessions#create'
  #post '/logout' => 'sessions#destroy'

  #get '/' => 'users#index', as: 'index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
