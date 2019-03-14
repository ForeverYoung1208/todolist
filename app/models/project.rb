class Project < ApplicationRecord
  belongs_to :user
  has_many :tasks

  def permitted_tasks
  	tasks.where("user_id=?",1)
  end
end
