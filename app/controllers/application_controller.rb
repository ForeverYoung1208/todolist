class ApplicationController < ActionController::Base
	before_action :authenticate_user!  

  layout :layout

  private

  def layout
    devise_controller? ? "login" : "application"
  end	

end
