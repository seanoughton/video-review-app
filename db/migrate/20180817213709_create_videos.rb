class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :url
      t.integer :version
      t.string :video_name
      t.integer :project_id
      t.timestamps
    end
  end
end
