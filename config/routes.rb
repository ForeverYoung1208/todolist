Rails.application.routes.draw do
  resources :tasks do
  	post 'toggleStatus', to: 'tasks#toggle_status'
  end
  resources :statuses
  devise_for :users
  resources :projects do
  	post 'changeTaskPriorities', to: 'projects#change_task_priorities'
  end


  root to: "projects#app"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
