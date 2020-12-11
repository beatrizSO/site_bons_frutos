Rails.application.routes.draw do
  get 'site/index'
  root 'site#index'

  get '/application', to: 'application#index'
end
