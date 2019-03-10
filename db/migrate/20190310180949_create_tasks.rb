class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name
      t.references :project, foreign_key: true
      t.integer :priority
      t.references :status, foreign_key: true
      t.datetime :deadline
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
