# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

team = Team.create(team_name: 'Sample Team')
user = User.create(user_name: 'Sean', email: 'seanoughton@gmail.com')
project = Project.create(project_name: 'First Project', team_id: team.id)
video = Video.create(video_name: 'AWS | Pitney Bowes', url:'https://vimeo.com/225178837/42ad8da73d',user_id:user.id, team_id:team.id, project_id: project.id)
comment = Comment.create(content: 'Sample Comment', user_id:user.id, team_id:team.id, video_id:video.id)
