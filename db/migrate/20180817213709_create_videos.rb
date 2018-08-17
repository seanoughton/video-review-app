class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :url
      t.integer :user_id
      t.integer :team_id
      t.integer :project_id
      t.timestamps
    end
  end
end
