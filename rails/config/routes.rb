Rails.application.routes.draw do
  root "home#index"
  get "health" => "rails/health#show"
end
