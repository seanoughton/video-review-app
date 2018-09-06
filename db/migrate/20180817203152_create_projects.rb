class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :project_name
      t.string :description
      t.integer :likes, default: 0
      t.timestamps
    end
  end
end
