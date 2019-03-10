json.extract! task, :id, :name, :project_id, :priority, :status_id, :deadline, :user_id, :created_at, :updated_at
json.url task_url(task, format: :json)
