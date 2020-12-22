Rails.application.routes.draw do
  root 'application#index'

  get '/#application', to: 'application#index'
  get '/#quem_somos', to: 'application#index', as: :quem_somos
end
