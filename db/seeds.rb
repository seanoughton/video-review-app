# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


admin = User.create(user_name: "admin", email: "admin@user.com", password: "password", admin: true)
user01 = User.create(user_name: "user01", email: "user01@user.com", password: "password", admin: false)
user02 = User.create(user_name: "user02", email: "user02@user.com", password: "password", admin: false)
user03 = User.create(user_name: "user03", email: "user03@user.com", password: "password", admin: false)


#PROJECTS
project01 = Project.create(project_name: 'Project 01', description: 'Promo video for AWS and Pitney Bowes')
project02 = Project.create(project_name: 'Project 02', description: 'Promo video for Autodesk featuring AutoCAD')
project03 = Project.create(project_name: 'Project 03', description: 'Promo video for Splunk')


#UsersProject
userproject01 = Userproject.create(user_id: user01.id, project_id: project01.id)
userproject02 = Userproject.create(user_id: user02.id, project_id: project02.id)
userproject03 = Userproject.create(user_id: user01.id, project_id: project02.id)
userproject04 = Userproject.create(user_id: user03.id, project_id: project01.id)
userproject05 = Userproject.create(user_id: user02.id, project_id: project01.id)

#VIDEOS
video01 = Video.create(url:'https://player.vimeo.com/video/225178837',version: 1, video_name: 'AWS | Pitney Bowes', project_id: project01.id, approval: true)

video02 = Video.create(url:'https://player.vimeo.com/video/226518977',version: 1, video_name: 'AutoCAD | Behind the Scenes', project_id: project02.id)

video03 = Video.create(url:'https://player.vimeo.com/video/217564062', version: 1, video_name: 'SPLUNK', project_id: project03.id)

#COMMENTS
#comment01 = Comment.create(content: 'Video 1 Comment 01a', timecode: Time.new(2015, 12, 8, 10, 19), user_id:user01.id, video_id:video01.id)

comment02 = Comment.create(content: 'Video 1 Comment 02', timecode: 2.00, user_id:user02.id, video_id:video01.id)

comment03 = Comment.create(content: 'Video 1 Comment 03', timecode: 2.00, user_id:user03.id, video_id:video01.id)

comment04 = Comment.create(content: 'Video 2 Comment 01', timecode: 2.00, user_id:user01.id, video_id:video02.id)

comment05 = Comment.create(content: 'Video 2 Comment 02', timecode: 2.00, user_id:user02.id, video_id:video02.id)

comment06 = Comment.create(content: 'Video 2 Comment 03', timecode: 2.00, user_id:user03.id, video_id:video02.id)

comment07 = Comment.create(content: 'Video 3 Comment 01', timecode: 2.00, user_id:user01.id, video_id:video03.id)

comment08 = Comment.create(content: 'Video 3 Comment 02', timecode: 2.00, user_id:user02.id, video_id:video03.id)

comment09 = Comment.create(content: 'Video 3 Comment 03', timecode: 2.00, user_id:user03.id, video_id:video03.id)
