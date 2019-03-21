class Project < ApplicationRecord
  belongs_to :user
  has_many :tasks, dependent: :destroy

  def self.permitted_for(user_id)
  	where("user_id=?",user_id)
  end

  def permitted_tasks(user_id)
  	tasks.where("user_id=?",user_id)
  end

  def change_task_priorities(task1_id, task2_id)
  	task1 = tasks.find(task1_id)
  	task2 = tasks.find(task2_id)
  	task1.priority, task2.priority = task2.priority, task1.priority
  	task1.save
  	task2.save
  end
end
