# Searching Youtube Videos using 'YouTube Data API v3'

Step#1:

Create API Key from `https://console.cloud.google.com/`for'YouTube Data API v3'


Step#2:

Send Api request to the Youtube to get list of videos matching the text typed. The url is :
`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q={SEARCH WORD}&key={API KEY}`


Step#3:
Place the videos on the src of  `<istream>` to play the selected youtube video. The url to play the youtube video is:

`https://www.youtube.com/embed/{videoId}`


The Project has used the matrial UI  react library (https://mui.com/).
