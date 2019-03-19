# json.extract! project, :id, :name, :user_id, :created_at, :updated_at
json.id project.id
json.name project.name
json.tasks project.permitted_tasks(current_user.id).order('priority ASC').collect { |t| {
	id: t.id, 
	name: t.name,
	priority:t.priority, 
	deadline: t.deadline, 
	status_id:t.status_id
}}

