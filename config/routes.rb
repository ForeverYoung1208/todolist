Rails.application.routes.draw do
  resources :tasks
  resources :statuses
  devise_for :users
  resources :projects

  root to: "projects#app"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
