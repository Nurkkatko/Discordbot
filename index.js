var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var start = require('./app');
var calc = require('./calc');

const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "NjA3NjY1ODk5MjAxMTAxODI2.XUc8nA.blHTR5jLG93T2XBhJYXiB__pi1Y";

const PREFIX = "!";

var Region = "euw1";



bot.on("ready", () =>{
  console.log("online bot beep");
})

bot.on("message", message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

      case "op.gg":
      var sumName = "";
        if (args[2] != null)
        {
          var sumName = args[1] + args[2];
        } else {
          var sumName = args[1];
        }
        console.log(sumName);
           start(sumName, Region, function (cbTop)
           {
              for (i = 0; i < 3; i++)
              {
                switch(cbTop[i].name){
                case "Rengar":
                message.channel.send("WEEEEOO WEEEOO Rengar PLAYER");
                break;
                  case "Vel'Koz":
                  message.channel.send("WEEEEOO WEEEOO Vel koz PLAYER");
                  break;
                  case "Yassuo":
                  message.channel.send("WEEEEOO WEEEOO Yassuo PLAYER");
                  break;
                  case "Lux":
                  message.channel.send("WEEEEOO WEEEOO LUX PLAYER");
                  break;
                  case "Draven":
                  message.channel.send("WEEEEOO WEEEOO DRAVEN PLAYER");
                  break;
                  case "Riven":
                  message.channel.send("WEEEEOO WEEEOO RIVEN PLAYER");
                  break;
                }
              }
              var player = new User(sumName, cbTop)
              console.log(cbTop);
              player.checkLoseSpree();
           });
        break;
    }

    class User
    {
        constructor(sumName, stats)
        {
          this.sumName = sumName;
          this.stats = stats;
        }

        checkLoseSpree()
        {
          var good = true;
          if (this.stats[4].hardstuck == true)
          {
            message.channel.send("Pretty hardstuck")
            good = false;
          }
          if (this.stats[4].hotStreak == true)
          {
            message.channel.send("Win spree!")
          }
          if (this.stats[4].wins/this.stats[4].losses > 1.33)
          {
            message.channel.send("this guy is a smurf!")
          }
          if (good == true)
          {
              message.channel.send("ayy seems good")
          }
        }
    }
})

bot.login(token);
