var request = require("request");
var https = require("https");
var async = require('async');
var dialog = require('dialog');
var calc = require('./calc');

// ezreal, yasuo, lux, riven,draven, shaco

function start(name, region, cb1) {

  var top3 = [
    champion1 = {id: "", points: "", name: ""},
    champion2 = {id: "", points: "", name: ""},
    champion3 = {id: "", points: "", name: ""},
    champion4 = {id: "", points: "", name: ""},
    playerData = {wins: "", losses: "", hotstreak: "", hardstuck: "", done: ""}
  ] ;

   function startId(cb2) {
            var url = 'https://' + region + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + name + '?api_key=RGAPI-cafb6052-37cb-4391-9fd3-7ad055e956cd';
            request({
                url: url,
                json: true
            }, function (error, response, body) {
            if (body.id != undefined){
                cb2(body.id);
              }
            });
        }

    function getMatch1(id, cb3) {
        var url = 'https://' + region + '.api.riotgames.com/lol/league/v4/entries/by-summoner/' + id + '?api_key=RGAPI-cafb6052-37cb-4391-9fd3-7ad055e956cd';
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            cb3(body[0]);
      });
    };

    function getMatch2(id, cb4) {
        var url = 'https://' + region + '.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/' + id + '?api_key=RGAPI-cafb6052-37cb-4391-9fd3-7ad055e956cd';
        request({
            url: url,
            json: true
        }, function (error, response, body) {
          cb4(body);
      });
    };

    function champname(id, cb){
      switch(id){

     case 266: cb("Aatrox"); break;
     case 412: cb("Thresh"); break;
     case 23: cb("Tryndamere"); break;
     case 79: cb("Gragas"); break;
     case 69: cb("Cassiopeia"); break;
     case 136: cb("Aurelion Sol"); break;
     case 13: cb("Ryze"); break;
     case 78: cb("Poppy"); break;
     case 14: cb("Sion"); break;
     case 1: cb("Annie"); break;
     case 202: cb("Jhin"); break;
     case 43: cb("Karma"); break;
     case 111: cb("Nautilus"); break;
     case 240: cb("Kled"); break;
     case 99: cb("Lux"); break;
     case 103: cb("Ahri"); break;
     case 2: cb("Olaf"); break;
     case 112: cb("Viktor"); break;
     case 34: cb("Anivia"); break;
     case 27: cb("Singed"); break;
     case 86: cb("Garen"); break;
     case 127: cb("Lissandra"); break;
     case 57: cb("Maokai"); break;
     case 25: cb("Morgana"); break;
     case 28: cb("Evelynn"); break;
     case 105: cb("Fizz"); break;
     case 74: cb("Heimerdinger"); break;
     case 238: cb("Zed"); break;
     case 68: cb("Rumble"); break;
     case 82: cb("Mordekaiser"); break;
     case 37: cb("Sona"); break;
     case 96: cb("Kog'Maw"); break;
     case 55: cb("Katarina"); break;
     case 117: cb("Lulu"); break;
     case 22: cb("Ashe"); break;
     case 30: cb("Karthus"); break;
     case 12: cb("Alistar"); break;
     case 122: cb("Darius"); break;
     case 67: cb("Vayne"); break;
     case 110: cb("Varus"); break;
     case 77: cb("Udyr"); break;
     case 89: cb("Leona"); break;
     case 126: cb("Jayce"); break;
     case 134: cb("Syndra"); break;
     case 80: cb("Pantheon"); break;
     case 92: cb("Riven"); break;
     case 121: cb("Kha'Zix"); break;
     case 42: cb("Corki"); break;
     case 268: cb("Azir"); break;
     case 51: cb("Caitlyn"); break;
     case 76: cb("Nidalee"); break;
     case 85: cb("Kennen"); break;
     case 3: cb("Galio"); break;
     case 45: cb("Veigar"); break;
     case 432: cb("Bard"); break;
     case 150: cb("Gnar"); break;
     case 90: cb("Malzahar"); break;
     case 104: cb("Graves"); break;
     case 254: cb("Vi"); break;
     case 10: cb("Kayle"); break;
     case 39: cb("Irelia"); break;
     case 64: cb("Lee Sin"); break;
     case 420: cb("Illaoi"); break;
     case 60: cb("Elise"); break;
     case 106: cb("Volibear"); break;
     case 20: cb("Nunu"); break;
     case 24: cb("Jax"); break;
     case 4: cb("Twisted Fate"); break;
     case 102: cb("Shyvana"); break;
     case 429: cb("Kalista"); break;
     case 36: cb("Dr. Mundo"); break;
     case 427: cb("Ivern"); break;
     case 131: cb("Diana"); break;
     case 223: cb("Tahm Kench"); break;
     case 63: cb("Brand"); break;
     case 113: cb("Sejuani"); break;
     case 8: cb("Vladimir"); break;
     case 154: cb("Zac"); break;
     case 421: cb("Rek'Sai"); break;
     case 133: cb("Quinn"); break;
     case 84: cb("Akali"); break;
     case 163: cb("Taliyah"); break;
     case 18: cb("Tristana"); break;
     case 120: cb("Hecarim"); break;
     case 15: cb("Sivir"); break;
     case 236: cb("Lucian"); break;
     case 107: cb("Rengar"); break;
     case 19: cb("Warwick"); break;
     case 72: cb("Skarner"); break;
     case 54: cb("Malphite"); break;
     case 157: cb("Yasuo"); break;
     case 101: cb("Xerath"); break;
     case 17: cb("Teemo"); break;
     case 75: cb("Nasus"); break;
     case 58: cb("Renekton"); break;
     case 119: cb("Draven"); break;
     case 35: cb("Shaco"); break;
     case 50: cb("Swain"); break;
     case 91: cb("Talon"); break;
     case 40: cb("Janna"); break;
     case 115: cb("Ziggs"); break;
     case 245: cb("Ekko"); break;
     case 61: cb("Orianna"); break;
     case 114: cb("Fiora"); break;
     case 9: cb("Fiddlesticks"); break;
     case 31: cb("Cho'Gath"); break;
     case 33: cb("Rammus"); break;
     case 7: cb("LeBlanc"); break;
     case 16: cb("Soraka"); break;
     case 26: cb("Zilean"); break;
     case 56: cb("Nocturne"); break;
     case 222: cb("Jinx"); break;
     case 83: cb("Yorick"); break;
     case 6: cb("Urgot"); break;
     case 203: cb("Kindred"); break;
     case 21: cb("Miss Fortune"); break;
     case 62: cb("Wukong"); break;
     case 53: cb("Blitzcrank"); break;
     case 98: cb("Shen"); break;
     case 201: cb("Braum"); break;
     case 5: cb("Xin Zhao"); break;
     case 29: cb("Twitch"); break;
     case 11: cb("Master Yi"); break;
     case 44: cb("Taric"); break;
     case 32: cb("Amumu"); break;
     case 41: cb("Gangplank"); break;
     case 48: cb("Trundle"); break;
     case 38: cb("Kassadin"); break;
     case 161: cb("Vel'Koz"); break;
     case 143: cb("Zyra"); break;
     case 267: cb("Nami"); break;
     case 59: cb("Jarvan IV"); break;
     case 81: cb("Ezreal"); break;
    }
    };

    startId(function(cb2){
    var id = cb2
        getMatch1(id, function(cb3){

          top3[4].wins = cb3.wins
          top3[4].losses = cb3.losses
          top3[4].hotstreak = cb3.hotStreak
          top3[4].hardstuck = cb3.veteran
        });

        getMatch2(id, function(cb4){
          top3[0].id = cb4[0].championId
          top3[0].points = cb4[0].championPoints
          top3[1].id = cb4[1].championId
          top3[1].points = cb4[1].championPoints
          top3[2].id = cb4[2].championId
          top3[2].points = cb4[2].championPoints
          top3[3].id = cb4[3].championId
          top3[3].points = cb4[3].championPoints
          champname(top3[0].id, function(cb){
            top3[0].name = cb;
          });
          champname(top3[1].id, function(cb){
            top3[1].name = cb;
          });
          champname(top3[2].id, function(cb){
            top3[2].name = cb;
          });
          champname(top3[3].id, function(cb){
            top3[3].name = cb;
          });
        //  console.log(top3);
          cb1(top3);
        });
    });
};

    module.exports = start;
