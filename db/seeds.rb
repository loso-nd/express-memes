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
zatana = User.create(username: 'zatana', password: '1234', email: 'zatana@justice.com', bio: "Understands Emotional IQ", admin: 'false')
nightwing = User.create(username: 'nightwing', password: '1234', email: 'nightwing@justice.com', bio: "Facial Expressions tell all.", admin: 'true')
5.times do |i|
    User.create(username: Faker::Name.name, password:'1234', email: 'faker@example.com', bio: "is very very cool", admin:false)
end 


#itmes 
puts 'Creating Items...'
Item.create(item_name: "Render Failure", price: 3.00, description: "Me carefully reading my code line by line for syntax errors", image_url: 'https://media.giphy.com/media/XEZZliwJmGg6otzKK1/giphy.gif', product:"Sticker")

Item.create(item_name: "This is Ridiculous", price: 3.00, description: "When I know my code is correct but it decided to not render as expected", image_url: 'https://media.giphy.com/media/3o7aTLhoDUdLALkXBe/giphy.gif', product:"Pin")

Item.create(item_name: "Error Persists", price: 3.00, description: "When I thought I found the error, but the error continues to persist. Now I must have a conversation with the program", image_url: 'https://media.giphy.com/media/jTZERwCGUrOFbPSvPj/giphy.gif', product:"Shirt")

Item.create(item_name: "Stuck for Hours", price: 3.00, description: "When I get stuck on bug for hours and found myself ready to scream.I take a deep breath.", image_url: 'https://media.giphy.com/media/HA13C6MiJhov0nB9db/giphy.gif', product:"Shirt")

Item.create(item_name: "The Finish Line", price: 3.00, description: "When I finally have something presentable", image_url: 'https://media.giphy.com/media/N1eSbsofSQE24/giphy.gif', product:"Sticker")

Item.create(item_name: "Break It Off", price: 3.00, description: "When the computer and I have been staring at each other for too long.", image_url: 'https://media.giphy.com/media/8PaTfcX430cHtDmgKk/giphy.gif', product:"Pin")

15.times do |i|
    Item.create(item_name: "Not Impressed", price: 3.00, description: "Not Impressed", image_url: 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png', product:"Pin")
end 


#orders
puts 'Creating Orders...'
15.times do |i|
    #   inflectOrder.create(user_id:User.all, item_id: Item.all )
    Order.create(user_id:User.all.sample.id, item_id: Item.all.sample.id)
end 

puts 'Done Seeding... 🌱'