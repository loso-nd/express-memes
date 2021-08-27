# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Order.destroy_all
User.destroy_all
Item.destroy_all


#User
puts 'Creating Users...'
zatana = User.create!(username: 'zatana', password: '1234', email: 'zatana@justice.com', bio: "Understands Emotional IQ", admin: false)
nightwing = User.create!(username: 'nightwing', password: '1234', email: 'nightwing@justice.com', bio: "Facial Expressions tell all.", admin: true)


#itmes 
puts 'Creating Items...'
25.times do |i|
    Item.create(item_name: "Not Impressed", price: 3.00, description: "Not Impressed", image_url: 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png', product:"Pin")
end 


#orders
puts 'Creating Orders...'
15.times do |i|
    #   inflectOrder.create(user_id:User.all, item_id: Item.all )
    Order.create(user_id:User.all.sample.id, item_id: Item.all.sample.id)
end 

puts 'Done Seeding...'