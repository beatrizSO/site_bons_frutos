Rails.application.routes.draw do
  root "application#index"

  get "/application", to: "application#index"
end
