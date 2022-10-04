# Systems-Integrations-hand-ins

1. File formats bonanza!
\nCreate new files in at least these formats: text, xml, yaml, json, csv.
You decide the content.
Create scripts that can read and parse the files in 2 programming languages of your choice.

2.1. Data format translation servers - Part I
Create at least two servers in two different programming languages with REST APIs. Create endpoints that read the files that you created last week, parse them and send them as response. You must figure out what data format to send as response.
You are allowed to split the responsibility between the servers if you are pressed for time. I.e. ServerA reads XML, CSV. ServerB reads YAML, TXT, JSON.

2.2. Date servers - Part I and Part II
- Part I: You should create two new servers (important that you don’t reuse the same two servers from this weeks’ other assignment since loose coupling is emphasized during this course). Both will be the “date authority” and when GET requesting /timestamp provide a current timestamp (ISO 8601).
- Part II: Integrate the date servers from last week.
For example when a client requests a timestamp from server A then server A requests the time from server B and responds with the time to the client.

Generate documentation for the some/all of the REST APIs created last week (data format translation, date authority).

3. Friend pane (Sockets)
Create an HTML site connected to a socket server that shows if a user is online, offline or not registered. The socket server will have a list of users from the start.
