class Project < ApplicationRecord
  belongs_to :user
  has_many :tasks, dependent: :destroy

  def self.permitted_for(user_id)
  	where("user_id=?",user_id)
  end

  def permitted_tasks(user_id)
  	tasks.where("user_id=?",user_id)
  end
end
