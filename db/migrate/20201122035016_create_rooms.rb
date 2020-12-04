class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
      t.string :name
      t.string :vonage_session_id
      t.text :description

      t.timestamps
    end
  end
end
