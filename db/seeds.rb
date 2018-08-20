# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#USER
user = User.new
user.password = "password"
user.user_name = "admin"
user.email = "admin@gmail.com"
user.admin = true
user.save



team = Team.create(team_name: 'Sample Team')

project = Project.create(project_name: 'First Project', team_id: team.id)

video01 = Video.create(video_name: 'AWS | Pitney Bowes', url:'https://player.vimeo.com/video/225178837',user_id:user.id, team_id:team.id, project_id: project.id)

video02 = Video.create(video_name: 'AutoCAD | Behind the Scenes', url:'https://player.vimeo.com/video/226518977',user_id:user.id, team_id:team.id, project_id: project.id)

video03 = Video.create(video_name: 'SPLUNK', url:'https://player.vimeo.com/video/217564062',user_id:user.id, team_id:team.id, project_id: project.id)

comment = Comment.create(content: 'Sample Comment', user_id:user.id, team_id:team.id, video_id:video01.id)
