# Video Review

*A Platform for Video Professionals and Clients to Review and Approve Videos*

Users login and access projects that have videos. The videos can be played and commented on. The videos can then be approved or not approved to move on to the next step.


## Installation

1. Download this repository
2. `cd` into repository directory
3. Run `rake db:migrate` to build the database
4. Run `rake db:seed` to seed the database with Cookies and Wines
5. Run `rake start` to start the server
6. Visit the address provided for the local server (i.e. `http://localhost:3000`)


## Usage

After creating an account or logging in, a user will be directed to base route. From there, the user can:
1. View all of the Projects
2. Go to the User's show page and Enter a project or Create a project or Edit their User profile
3. On the Project Show page a user can Enter a video to work on it or Add a video
4. On the Video Show page, the user can add comments to a video based on video timecode. The User can delete their own comments and see all of the comments on the video.  The user can approve or not approve the video,
5. A User can see all of the current Projects on the Projects Index page
6. A User can see all of the current Videos on the Videos Index page
7. A User can see all of the current Users on the Users Index page
8. A User can log out


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/seanoughton/cookies-and-wine.

## License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct
This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.
