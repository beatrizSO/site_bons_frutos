Rails.application.routes.draw do
  root "application#homepage"

  get "/application", to: "application#homepage"
end
