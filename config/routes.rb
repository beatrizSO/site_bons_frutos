Rails.application.routes.draw do
  root 'application#index'

  get '/#application', to: 'application#index'
  get '/#quem_somos', to: 'application#index', as: :quem_somos
  get '/#about_section', to: 'application#homepage', as: :about
  get '/#services', to: 'application#homepage', as: :services
  get '/contato', to: 'application#contact', as: :contact
end
