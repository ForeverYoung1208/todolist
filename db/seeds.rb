# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

statuses =[
	Status.where(id: 1).first_or_create(
		name: 'starting'
	),
	Status.where(id: 2).first_or_create(
		name: 'in process'
	),
	Status.where(id: 3).first_or_create(
		name: 'ending'
	),
	Status.where(id: 4).first_or_create(
		name: 'done',
		is_final: true
	),
]

unless user = User.where(email: 'test@test.com').first
	user = User.create!({:email => "test@test.com", :password => "123456", :password_confirmation => "123456" })
end

project = Project.where(id: 1).first_or_create(
	name: 'First test project',
	user: user
)

task = Task.where(id: 1).first_or_create(
	name: 'First test task',
	project: project,
	priority: 1,
	status: statuses[0],
	deadline: DateTime.parse("2019-03-31 23:59:59"),
	user: user
)





