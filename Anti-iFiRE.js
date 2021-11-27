const http = require("http");
var blacklist = new Map();
['1.1.1.1'];
process.env.BLACKLIST
const fs = require("fs");
var timeout = 10 * 1000;
var visit = 0;
var visits = 0;
function add_address(address) {
    blacklist.set(address, Date.now() + timeout);
}
const { exit } = require("process");
const { fsyncSync } = require('fs');
const io = require('socket.io');
const ask = require("prompt-sync")();
const getIP = require('external-ip')();

//limiter
const { RateLimiterMemory } = require('rate-limiter-flexible');
const opts = {
    points: 6,
    duration: 1,
};
const rateLimiter = new RateLimiterMemory(opts);
 
//Custom Item
/******************************************/
if (!fs.existsSync('./assets')){
  fs.mkdirSync('./assets');
}
if (!fs.existsSync('./assets/game')){
  fs.mkdirSync('./assets/game');
}
if (!fs.existsSync('./assets/social')){
  fs.mkdirSync('./assets/social');
}
if (!fs.existsSync('./assets/interface')){
  fs.mkdirSync('./assets/interface');
}
if (!fs.existsSync('./assets/interface/large')){
  fs.mkdirSync('./assets/interface/large');
}
/******************************************/
var files = new Map();
for (var _i = 0, _a = fs.readdirSync("assets/game"); _i < _a.length; _i++) {
  var file = _a[_i];
  if (!file.endsWith(".rttex")) continue;
  files.set(file, fs.readFileSync("assets/game/" + file));
};
for (var _i = 0, _a = fs.readdirSync("assets/social"); _i < _a.length; _i++) {
  var file1 = _a[_i];
  if (!file1.endsWith(".rttex")) continue;
  files.set(file1, fs.readFileSync("assets/social/" + file1));
};
for (var _i = 0, _a = fs.readdirSync("assets/interface/large"); _i < _a.length; _i++) {
  var file2 = _a[_i];
  if (!file2.endsWith(".rttex")) continue;
  files.set(file2, fs.readFileSync("assets/interface/large/" + file2));
};
//Custom Item End

function displayTime() {
    var str = "";

    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()

    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    str += "(" + hours + ":" + minutes + ":" + seconds + " ";
    if(hours > 11){
        str += "PM)"
    } else {
        str += "AM)"
    }
    return str;
}

function textantiread() {
    var str = "";
    str = "Try again later?"
    return str;
}

console.clear();
const ip = ask("Server IP > ")
const port = ask("Server Port > ");
const meta = ask("Server Meta ( default : localhost ) > ");
const mt = ask("Server Maintance ( yes/no ) > ");
console.clear();
var anjg = "";
if (mt.toLowerCase() == "yes") {
    const mtmessage = ask("Maintenance Message > ");
    console.clear()
    anjg = mtmessage;
}

const client = http.createServer(async function(req, res) {
  var url = req.url.split("/assets/game/")[1] || req.url.split("/assets/interface/large/")[1] || req.url.split("/assets/social/")[1];
	var RateLimiter = require('limiter').RateLimiter;
    var limiter = new RateLimiter(150, 'hour');
    limiter.removeTokens(1, function(err, remainingRequests) {
    });
    var RateLimiter = require('limiter').RateLimiter;
    var limiter = new RateLimiter(1, 250);
    limiter.removeTokens(1, function() {
    });
    var RateLimiter = require('limiter').RateLimiter;
    var limiter = new RateLimiter(150, 'hour', true);  
    var RateLimiter = require('limiter').RateLimiter;
    var limiter = new RateLimiter(10, 'second');
    if (limiter.tryRemoveTokens(5))
    var RateLimiter = require('limiter').RateLimiter;
    var limiter = new RateLimiter(1, 250);
    limiter.getTokensRemaining();
    var BURST_RATE = 1024 * 1024 * 150; 
    var FILL_RATE = 1024 * 1024 * 50; 
    var TokenBucket = require('limiter').TokenBucket;
    var bucket = new TokenBucket(BURST_RATE, FILL_RATE, 'second', null);

const {
  RateLimiterMemory
} = require('rate-limiter-flexible');
const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 1
});
   rateLimiter.consume(3)
    let ipuser = req.connection.remoteAddress;
    ipuser = ipuser.split(/::ffff:/g).filter(i => i).join('');
    if (!blacklist.has(req.connection.remoteAddress)) {//hahay
        add_address(req.connection.remoteAddress);
    }
    else {
        var not_allowed = blacklist.get(req.connection.remoteAddress);
        if (Date.now() > not_allowed) {
            blacklist.delete(req.connection.remoteAddress);
        }
        else
            blacklist.delete();
            process.env.BLACKLIST
            process.env.limiter
        process.env.helmet
    }

    // dapa
let FLOOD_TIME = 10000;
let FLOOD_MAX = 100;

let flood = {
    floods: {},
    lastFloodClear: new Date(),
    protect: (io, socket) => {

        if( Math.abs( new Date() - flood.lastFloodClear) > FLOOD_TIME ){
            flood.floods = {};
            flood.lastFloodClear = new Date();
        }

        flood.floods[socket.id] == undefined ? flood.floods[socket.id] = {} : flood.floods[socket.id];
        flood.floods[socket.id].count == undefined ? flood.floods[socket.id].count = 0 : flood.floods[socket.id].count;
        flood.floods[socket.id].count++;

        if( flood.floods[socket.id].count > FLOOD_MAX){
            io.sockets.connected[socket.id].disconnect();
            return false;
        }

        return true;
    }
} // sampe sini

var limiter = new RateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    delayMs: 0,
    message: "PROTECTED BY iFiRE"
});
var limiter = new RateLimit({
    windowMs: 15*60*1000, 
    max: 100,
    delayMs: 0, 
    lookup: ['connection.remoteAddress'],
    total: 100,
    expire: 1000 * 60 * 60
        });
        var limiter = new RateLimit({
          windowMs: 1000,
          max: 15,
          delayMs: 0, 
          statusCode: 429,
          lookup: ['connection.remoteAddress'],
          rateLimitBy: ['connection.remoteAddress'],
          total:15,
          expire: 1000*60*60,
          message: `<script type="text/javascript">
          var onloadCallback = function()
          {
            alert("You are being rate limited");
          };
        </script>`
        });   
app.use(limiter);
app.use(helmet()); 
    var banned = [ipuser, ipuser];
banned.forEach(async ipuser => {
  if (ipuser === ipuser) {
      rateLimiter.consume(3)
          res.writeHead(999, "Protected BY iFiRE", {
              "Server": "iFiRE" //ganti aja
          });
          process.env.limiter
          process.env.BLACKLIST;
    await add_address(ipuser); 
  }
  else {
    res.write("");
  }
}); 
    
rateLimiter.consume(ipuser, 2).then((rateLimiterRes) => {
    res.writeHead(200, {
      "Server": "iFiRE",
      "Retry-After": rateLimiterRes.msBeforeNext / 10 * 1000,
      "X-RateLimit-Limit": opts.points,
      "X-RateLimit-Remaining": rateLimiterRes.remainingPoints,
      "X-RateLimit-Reset": new Date(Date.now() + rateLimiterRes.msBeforeNext),
    });
    next();
  })
  .catch(async () => {
    res.destroy();
    process.env.BLACKLIST
    await add_address(ipuser);
    return;
  });

  if (!blacklist.has(ipuser)) {
    await add_address(ipuser);
  } else {
    var not_allowed = blacklist.get(ipuser);
    if (Date.now() > not_allowed + timeout) {
      blacklist.delete(ipuser);
    } else {
      await add_address(ipuser)
      blacklist.set(ipuser, Date.now() + timeout);
    }
  }

    if (req.url == "/growtopia/server_data.php") {
        // detect a device
            if (req.headers['accept'] == "*/*" && req.headers['connection'] == "close") {
                if (mt.toLowerCase() == "yes") {
                    res.write(`server|${ip}\nport|${port}\ntype|1\nmaint|${anjg}\n\nbeta_server|127.0.0.1\nbeta_port|17091\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
                    res.end();
                }
                else if (mt.toLowerCase() == "no") {
                    res.write(`server|${ip}\nport|${port}\ntype|1\n#maint|${anjg}\n\nbeta_server|127.0.0.1\nbeta_port|17091\nbeta_type|1\nmeta|${meta}\nRTENDMARKERBS1001`);
                    res.end();
                }
                visit++;
                console.log(`[${tanggal}/${bulan}/${tahun} ${displayTime()}] | [GROWTOPIA] ${ipuser} entered ${req.url} | Total Logs: ${visit} (Android/IOS)`);
            }
            else if (req.headers['accept'] == "*/*" && req.httpVersion == "1.0") {
                if (mt.toLowerCase() == "yes") {
                    res.write(`server|${ip}\nport|${port}\ntype|1\nmaint|${anjg}\n\nbeta_server|127.0.0.1\nbeta_port|17091\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
                    res.end();
                }
                else if (mt.toLowerCase() == "no") {
                    res.write(`server|${ip}\nport|${port}\ntype|1\n#maint|${anjg}\n\nbeta_server|127.0.0.1\nbeta_port|17091\nbeta_type|1\nmeta|${meta}\nRTENDMARKERBS1001`);
                    res.end();
                }
                visit++;
                console.log(`[${tanggal}/${bulan}/${tahun} ${displayTime()}] | [GROWTOPIA] ${ipuser} entered ${req.url} | Total Logs: ${visit} (Mac/Windows)`);
            }
            // Server_data.php hider
            else if (req.headers['user-agent'] == "python-requests/2.25.0") {
                res.write(textantiread());
                res.end();
                res.destroy();
            }
            else if (req.headers['connection'] == "close") {
                res.write(textantiread());
                res.end();
                res.destroy();
            }
            else if (req.headers['connection'] == "Keep-Alive") {
                res.write(textantiread());
                res.end();
                res.destroy();
                
            }
    }
    
	//Support RTTEX
	else if (url && files.has(url.replace(/\//g, "")) && req.method.toLowerCase() === "get") {
		if (!fs.existsSync(`.${req.url}`)) {
            console.log(`[ERROR]CUSTOM ITEM ${req.url} NOT FOUND!`);
            res.writeHead(200, `.${req.url} Not Found`)
            res.write(`.${req.url} Not Found`);
            res.end();
            return;
        }
        res.writeHead(200, {
            'Content-Type': 'application/x-www-form-urlencoded',
            "Content-Disposition": "attachment; filename=" + !url.endsWith(".rttex") ? url + ".rttex" : url,
            'Content-Length': req.url.length,
            "beserver": "06",
            "Connection": "keep-alive",
            "Accept-Ranges": "bytes"
        });
        console.log(`[LOAD]${ipAddress}:${portAddress} => Load Custom Item In:${req.url}[${req.method}]`);
		res.write(files.get(url), function (err) {
            if (err)
            console.log(err);
       }); //Support C Item
    }
  else {
        process.env.BANNED
        const allowedMethods = ['Franz']; // closed all method
        if (!allowedMethods.includes(req.method)) {
            res.writeHead(200, "Protected By iFiRE", {
                "Server": "iFiRE"
            });
        rateLimiter.consume(ipuser, 2).then((rateLimiterRes) => { //rateLimiter
            res.writeHead(200, "iFiRE", {
                "Retry-After": rateLimiterRes.msBeforeNext / 1000,
                "X-RateLimit-Limit": opts.points,
                "X-RateLimit-Remaining": rateLimiterRes.remainingPoints,
                "X-RateLimit-Reset": new Date(Date.now() + rateLimiterRes.msBeforeNext)
            });
            next();
           })
           .catch(() => {
            res.destroy();
            // req.socket.destroy();
            process.env.BLACKLIST
            process.env.limiter;
            process.env.helmet;
            add_address(ipuser);
            return;
        });
        
        // hahay
        banned.forEach(async ipuser => {
            if (ipuser === ipuser) {
              rateLimiter.consume(3)
                  if (!blacklist.has(ipuser)) {
                    await add_address(ipuser);
                  }
                else {
                  var not_allowed = blacklist.get(ipuser);
                  if (Date.now() > not_allowed + timeout) {
                    blacklist.delete(ipuser);
                  }
                  else {
                    await add_address(ipuser)
                    // return req.connection.destroy();
                }
            }
          }
          else {
            res.write("");
          }
        });
      }
      else {
          res.write("");
      }

      // hahay
      blacklist.set(ipuser, Date.now() + timeout);
      banned.forEach(async ipuser => {
        if (ipuser === ipuser) {
          res.write("");
          await add_address(ipuser);
          blacklist.set(ipuser, Date.now() + timeout);
          if (!blacklist.has(ipuser)) {
            await add_address(ipuser);
          } else {
            var not_allowed = blacklist.get(ipuser);
            if (Date.now() > not_allowed + timeout) {
              blacklist.delete(ipuser);
            } else {
              await add_address(ipuser)
              return blacklist.set(ipuser, Date.now() + timeout);
            }
          }
        }
        else {
          res.write("");
        }
      }); // hahay
    } 
            res.end();
            res.destroy();
            exports = module.exports = flood;
            });
            var express = require('express');
            var helmet = require('helmet');
            var RateLimit = require('express-rate-limit');
            var app = express();
            var limiter = ({
                windowMs: 15 * 60 * 1000,
                max: 1000,
                delayMs: 0,
                message: "Protected By iFiRE"
            });
            var limiter = ({
                windowMs: 15*60*1000, 
                max: 100,
                delayMs: 0, 
                lookup: ['connection.remoteAddress'],
                total: 100,
                expire: 1000 * 60 * 60
                    });   
                    var limiter = ({
                      windowMs: 1000,
                      max: 15,
                      delayMs: 0, 
                      statusCode: 429,
                      lookup: ['connection.remoteAddress'],
                      rateLimitBy: ['connection.remoteAddress'],
                      total:15,
                      expire: 1000*60*60,
                      message: `<script type="text/javascript">
                      var onloadCallback = function()
                      {
                        alert("You are being rate limited");
                      };
                    </script>`
});
var limiter = new RateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    delayMs: 0,
    message: ""
});
var limiter = new RateLimit({
    windowMs: 15*60*1000, 
    max: 100,
    delayMs: 0, 
    lookup: ['connection.remoteAddress'],
    total: 100,
    expire: 1000 * 60 * 60
        });   
        var limiter = new RateLimit({
          windowMs: 1000,
          max: 15,
          delayMs: 0, 
          statusCode: 429,
          lookup: ['connection.remoteAddress'],
          rateLimitBy: ['connection.remoteAddress'],
          total:15,
          expire: 1000*60*60,
          message: `<script type="text/javascript">
          var onloadCallback = function()
          {
            alert("You are being rate limited");
          };
        </script>`
            });     

client.listen(80)
client.on("connection", async function (socket) { 
let sockets = socket.remoteAddress;
    if (!blacklist.has(sockets)) {
    	visit++;
        await add_address(sockets);
    }
    else {

        var not_allowed = blacklist.get(sockets);
        if (Date.now() > not_allowed + timeout) {
            blacklist.delete(sockets);
        }
        else
        
           socket.destroy();
    }

    socket.on('bcast', async (data) => {
        try {
          await rateLimiter.consume(socket.handshake.address); 
          socket.emit('news', { 'data': data });
          socket.broadcast.emit('news', { 'data': data });
        } catch(rejRes) {
          socket.emit('blocked', { 'retry-ms': rejRes.msBeforeNext });
        }
      });

    // hahay
    var socketbanned = [sockets];
    var array = [sockets];

    socketbanned.forEach(async sockets => {
        if (sockets == sockets) {
            // socket.destroy();
            array.forEach(async function (item, index) {
                if (sockets == item) await add_address(sockets); blacklist.set(sockets, Date.now() + timeout); // return socket.destroy();
            });
        }
        else {
            socket.write("");
        }

        // hahay
        socket.on('bcast', data => {
            rateLimiter.consume(uniqueSocketId)
              .then(() => {
                socket.emit('news', { 'data': data });
                socket.broadcast.emit('news', { 'data': data });
              })
              .catch(rejRes => {
              });
          });

          // hahay
          socketbanned.forEach(sockets => {
            if (sockets === sockets) {
              socket.write(``);
              if (sockets.length > 100) sockets = [];
              socketbanned.forEach(sockets => {
                if (sockets === sockets) {
                  socket.write(``);
                  socket.setTimeout(timeout);
                } else {
                  socket.write("");
                }
              });
            } else {
              socket.write("");
            }
          });
    }); //sampe sini
});