class Task < ApplicationRecord
  belongs_to :project
  belongs_to :status
  belongs_to :user
end
