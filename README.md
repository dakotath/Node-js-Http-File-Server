# This http server runs on port 8080 and cas support to play HTML, MP3 and MP4 files without adding more stuff to exec.js The exec.js contains the data for the server, you can modify it however you like!

Limitations.
1. Cannot open files/folders with spaces in the name.
2. html script/file links cannot have / or ./ at the beginning unless you are grabbing from root of server.
3. Copys video/audio files to another file that it can read. (Bc if it tried loading an mp4 without it would get stuck in a loop responding with the video player screen.
