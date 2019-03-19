class ApplicationController < ActionController::Base
	before_action :authenticate_user!  
  layout :layout

  ::STATUS_ID_START = 1

  private

  def layout
    devise_controller? ? "login" : "application"
  end	

end
