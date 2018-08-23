class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :content
      t.float :timecode
      t.integer :user_id
      t.integer :video_id
      t.timestamps
    end
  end
end
