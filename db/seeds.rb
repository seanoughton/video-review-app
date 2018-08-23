# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#TEAM
team = Team.create(team_name: 'Sample Team')

#USER
user = User.new
user.user_name = "admin"
user.email = "admin@gmail.com"
user.password = "password"
user.admin = true
user.team_id = team.id
user.save



#PROJECT
project = Project.create(project_name: 'First Project', team_id: team.id)

#VIDEOS
video01 = Video.create(url:'https://player.vimeo.com/video/225178837',version: 1, video_name: 'AWS | Pitney Bowes', project_id: project.id)

video02 = Video.create(url:'https://player.vimeo.com/video/226518977',version: 1, video_name: 'AutoCAD | Behind the Scenes', project_id: project.id)

video03 = Video.create(url:'https://player.vimeo.com/video/217564062', version: 1, video_name: 'SPLUNK', project_id: project.id)

#COMMENT
comment = Comment.create(content: 'Sample Comment', timecode: 1.15, user_id:user.id, video_id:video01.id)
