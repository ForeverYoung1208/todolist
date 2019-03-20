class ApplicationController < ActionController::Base
	before_action :authenticate_user!  
  layout :layout

  ::STATUS_ID_START = 1
  ::STATUS_ID_END = 4

  private

  def layout
    devise_controller? ? "login" : "application"
  end	

end
