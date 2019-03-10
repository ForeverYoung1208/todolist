json.extract! status, :id, :name, :is_final, :created_at, :updated_at
json.url status_url(status, format: :json)
