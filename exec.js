const http = require('http')
const fs = require('fs')
const { exec } = require('child_process');
const child = exec('files.exe ./');
var output = '';
var modu_supp = "";
var proc = exec(`files.exe `, [
  './'
]);
output = '';
function getItems(dir)
{
  proc = exec(`files.exe ./`);
  proc.stdout.on('data', (chunk) => { output += chunk.toString(); });
  console.log(output)
  return output;
}
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
function findWord(word, str_pos) {
  str_pos = str_pos.indexOf(word);
  if (str_pos > -1) {
    return true;
  } else {
    return false;
  }
}
var aud = 1;
function execShellCommand(cmd) {
  const exec = require("child_process").exec;
  return new Promise((resolve, reject) => {
    exec(cmd, { maxBuffer: 1024 * 500 }, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
      } else if (stdout) {
        stdout.stdout.on('data', (chunk) => {
          output += chunk.toString();
        });
        console.log(output)
        return(output); 
      } else {
        console.log(stderr);
      }
      resolve(stdout ? true : false);
    });
  });
}
function reqItem(url)
{
  itm = getItems(url)
  delay(10).then(() =>{
    return itm;
  });
}

const server = http.createServer(function(req, res) {
  fs.readFile(__dirname + req.url.toString(), (err, data) => {
    delay(1).then(() =>{
      if(data == null) {
        console.log(req.url.toString().replace("/favicon.ico", ""));
        res.end('<font color="black" size="40"><img width="30px" haight="30px" src="warning_icon.png"></img>404<img width="30px" haight="30px" src="warning_icon.png"></img></font><h4 align="left">The selected file could not be found</h4><h4 align="left"><p>Dakotath Webserver</p><h4 align="left">' + `${getItems("s")}`);
        output = '';
      }
      else {
        if(req.url.toString() == "/files")
        {
          console.log("/ wanted");
          console.log(getFiles(path))
        }
        else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          if(findWord(".mp3", req.url.toString()) && aud == 1)
          {
            aud = 0;
            fs.copyFile("." + req.url.toString(), "." + req.url.toString().replace(".mp3", ".matmp"), (err) => { if (err) { console.log('Error Occurred:', err); } else { console.log('File Copied Successfully!') } });
            res.write("<font color='red' size='20'>Playing " + req.url.toString().replace("/", "") + "</font><h4 align='left'>" + "<audio controls src='" + req.url.toString().replace(".mp3", ".matmp") + "' autoplay></audio>");
            console.log(req.url.toString())
            res.end()
            aud = 1;
          }
          else
          {
            if(findWord(".mp3", req.url.toString()) && aud == 1)
            {
              aud = 0;
              if(findWord(".mp3", req.url.toString())) {
                fs.copyFile("." + req.url.toString(), "." + req.url.toString().replace(".mp3", ".matmp"), (err) => { if (err) { console.log('Error Occurred:', err); } else { console.log('File Copied Successfully!') } });
              }
              res.write(req.url.toString().replace("/", "") + "<audio controls src='" + req.url.toString().replace(".mp3", ".matmp") + "' autoplay></audio>");
              console.log(req.url.toString())
              aud = 1;
            }
            else {
              if(findWord(".mp3", data.toString()))
              {
                aud = 0;
                if(findWord(".mp3", req.url.toString())) {
                  fs.copyFile("." + req.url.toString(), "." + req.url.toString().replace(".mp3", ".matmp"), (err) => { if (err) { console.log('Error Occurred:', err); } else { console.log('File Copied Successfully!') } });
                }
                data = data.toString().replace(".mp3", ".matmp");
                console.log(req.url.toString())
                aud = 1;
              }
              if(findWord(".mp4", req.url.toString()) && aud == 1)
              {
                aud = 0;
                fs.copyFile("." + req.url.toString(), "." + req.url.toString().replace(".mp4", ".vatmp"), (err) => { if (err) { console.log('Error Occurred:', err); } else { console.log('File Copied Successfully!') } });
                res.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>Page Title</title><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><style>body { background:#000000; background:-moz-radial-gradient(center, #000000 0%, #00FFFE 0%, #000000 100%); background:-webkit-radial-gradient(center, #000000 0%, #00FFFE 0%, #000000 100%); background:radial-gradient(ellipse at center, #000000 0%, #00FFFE 0%, #000000 100%) } .text_cn { text-align:center; align:center }</style><h4 align="center"><font color="red" class="text_cn" size="20">Video Player</font></h4><h4 align="left"><video controls id="vid" src='` + req.url.toString().replace(".mp4", ".vatmp") + `' autoplay></video><script>vid=document.querySelector('#vid');vid.height=window.innerHeight-130;vid.width=window.innerWidth-50;</script></body></html>`);
                console.log(req.url.toString())
                res.end()
                aud = 1;
              }
              else
              {
                if(findWord(".mp4", req.url.toString()) && aud == 1)
                {
                  aud = 0;
                  if(findWord(".mp4", req.url.toString())) {
                    fs.copyFile("." + req.url.toString(), "." + req.url.toString().replace(".mp4", ".vatmp"), (err) => { if (err) { console.log('Error Occurred:', err); } else { console.log('File Copied Successfully!') } });
                  }
                  res.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>Page Title</title><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><style>body { background:#000000; background:-moz-radial-gradient(center, #000000 0%, #00FFFE 0%, #000000 100%); background:-webkit-radial-gradient(center, #000000 0%, #00FFFE 0%, #000000 100%); background:radial-gradient(ellipse at center, #000000 0%, #00FFFE 0%, #000000 100%) } .text_cn { text-align:center; align:center }</style><h4 align="center"><font color="red" class="text_cn" size="20">Video Player</font></h4><h4 align="left"><video controls id="vid" src='` + req.url.toString().replace(".mp4", ".vatmp") + `' autoplay></video><script>vid=document.querySelector('#vid'); vid.height=window.innerHeight-130; vid.width=window.innerWidth-50; </script></body></html>`);
                  console.log(req.url.toString())
                  aud = 1;
                }
                else {
                  if(findWord(".mp4", data.toString()))
                  {
                    aud = 0;
                    if(findWord(".mp4", req.url.toString())) {
                      fs.copyFile("." + req.url.toString(), "." + req.url.toString().replace(".mp4", ".vatmp"), (err) => { if (err) { console.log('Error Occurred:', err); } else { console.log('File Copied Successfully!') } });
                    }
                    data = data.toString().replace(".mp4", ".vatmp");
                    console.log(req.url.toString())
                    aud = 1;
                  }
              
              res.write(data);
              console.log(req.url.toString())
              res.end()
            }
          }
        }
      }
    };
  }
});
  });
});

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
  });
}
  
// Function to get current filenames
// in directory
function getFiles(directory_name)
{
  let filenames = fs.readdirSync(directory_name);
  console.log("\nFilenames in directory:");
  filenames.forEach((file) => {
      console.log('<a href="', file + '">' + file + '</a>');
      return('<a href="', file.toString() + '">' + file.toString() + '</a>');
  });
}
server.listen(8080);
console.log("Running server");