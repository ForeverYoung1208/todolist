class Task < ApplicationRecord
  belongs_to :project
  belongs_to :status
  belongs_to :user

  def toggle_status
  	if self.status_id == ::STATUS_ID_START 
  		self.status_id = ::STATUS_ID_END
  	elsif self.status_id == ::STATUS_ID_END
  		self.status_id = ::STATUS_ID_START
  	elsif 
  		self.status_id = ::STATUS_ID_END
  	end
  	self.save
  	self
  end

end
