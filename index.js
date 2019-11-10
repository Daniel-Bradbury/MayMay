const { Client, Attachment } = require('discord.js');
const fs = require('fs');

const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('MayMay ready.');
  // Link to git
  client.user.setActivity('m!git', { type: 'WATCHING' });
});


client.on('message', message => {
function defmeme(id,url) {
	if (message.content === ("m!"+id)) {
		message.delete(1000);
		const attachment = new Attachment(url);
		message.reply("said:");
		message.channel.send(attachment);
	}
}

if (message.content === ("m!git")) {
	message.reply("https://tinyurl.com/maymaycode");
}

// MEME LIBRARY
// PREFIX: "m!"

defmeme("politecat","https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg")
defmeme("lenny","https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/1/12/SAMLpCt.jpg")
defmeme("doge","https://assets.change.org/photos/4/io/uf/hPIouFKGvDQBjoM-800x450-noPad.jpg")
defmeme("bork","https://memesbams.com/wp-content/uploads/2017/10/28-Doge-Original-Image.jpg")
defmeme("groovin","https://cdn.discordapp.com/attachments/570255505809997824/571750591341002752/IMG-20190415-WA0003.jpg")
defmeme("bruhmentum","https://cdn.discordapp.com/attachments/570255505809997824/571750414752415764/rxbjadfqpbl21.jpg")
defmeme("lphil","https://cdn.discordapp.com/attachments/570255505809997824/571750184480931840/b3f5467.jpg")
defmeme("longdoge","http://i0.kym-cdn.com/photos/images/original/000/622/900/0ff.jpg")
defmeme("snekcat","http://i.imgur.com/fq46j1e.jpg")
defmeme("pepe","https://cdn.cnn.com/cnnnext/dam/assets/160927210830-tk-ah0927-large-169.jpg")
defmeme("derp","https://cdn.evoke.ie/2016/01/22153142/391.jpg")
defmeme("derpshook","https://i.imgur.com/4LoJVPN.gif")
defmeme("starkderp","https://i.imgur.com/7cMWZSB.gif")
defmeme("angercat","http://wfiles.brothersoft.com/s/scottish-fold-funny-face_95161-1440x900.jpg")
defmeme("crycat","https://i.kym-cdn.com/entries/icons/original/000/026/489/crying.jpg")
defmeme("tmyk","https://i.ytimg.com/vi/03QuygM0YB8/maxresdefault.jpg")
defmeme("wat","https://img.allw.mn/content/zl/ep/kb1gg0uo_500x498.jpg")
defmeme("challengereligion","http://www.quickmeme.com/img/e2/e21a589f46233c17cbc4b1f3b2ae1e1f63e6f941be40e5350d1c844af9dd4c6c.jpg")
defmeme("takemymoney","https://i.kym-cdn.com/photos/images/facebook/000/113/201/ShutUpAndTakeMyMoney.jpg")
defmeme("nani","https://i.ytimg.com/vi/vxKBHX9Datw/maxresdefault.jpg")
defmeme("jojolick","https://cdn.discordapp.com/attachments/562372678690930689/571779240693858306/lick-S1QzRJp7z.gif")
defmeme("jojopunch","https://saechaocirculation.files.wordpress.com/2016/12/star-platinum-vs-crazy-diamond.gif")
defmeme("animeheadbang","https://media1.tenor.com/images/e3ee98dbe8f779bd28a7ec3a964bb0c2/tenor.gif")
defmeme("blink","https://media3.giphy.com/media/3ELtfmA4Apkju/giphy.gif")
defmeme("fbiwantslocation","https://i.imgur.com/8uZgKCe.jpg")
defmeme("bekfast","https://s3.amazonaws.com/s3.mp-cdn.net/75/4a/43f0d559653ca0cedbc6629b0f36-bekfast.jpg")
defmeme("politecatderp","https://66.media.tumblr.com/d78eca87f8777c91aba8e36bfaf60841/tumblr_piexz3XwSj1ufzrtb_540.jpg")
defmeme("areyousure","https://media1.tenor.com/images/179a70460819456f1ce647cf57e7d1aa/tenor.gif")
defmeme("hahayes","https://i.kym-cdn.com/photos/images/original/001/170/001/c44.png")
defmeme("defdance","https://thumbs.gfycat.com/MilkyUnsteadyLeonberger-max-1mb.gif")
defmeme("wry","https://media1.tenor.com/images/086c4d1f98fc032213ae1c20a5538efb/tenor.gif")
defmeme("ree","https://i.redd.it/p51gfhaw8u421.jpg")
defmeme("ohyou","https://media.discordapp.net/attachments/560132302454259712/574123747787800596/Ihavea75commissiongoingbut_ef4229bae1aeb3b131823a72b7d33b80.jpg")
defmeme("nuke","https://media.giphy.com/media/HhTXt43pk1I1W/200.gif")
defmeme("spideronionring","https://cdn.discordapp.com/attachments/559356084406452224/574153117239738369/uf2ja2y874t01.jpg")
defmeme("sanslmao","https://cdn.discordapp.com/attachments/559356198978322432/574158997809135636/sans_emote_afkjhsjdg.png")
defmeme("unoreverse","https://i.redd.it/wiga0fsqors11.png")
defmeme("trumpderp","https://cdn.discordapp.com/attachments/560132302454259712/574183924314406912/Screenshot_2019-05-04_Stu_on_Twitter_FOXNRL_with_Sam_Burgess_on_the_coverage_is_hilarious_Hes_a_pota.png")
defmeme("feelsraveman","https://cdn.discordapp.com/attachments/559356084406452224/576780004688396318/feelsraveman.gif")
defmeme("villagerderp","https://video.twimg.com/tweet_video/D6iHyNCXkAAchvD.mp4")
defmeme("omegalul","https://cdn.vox-cdn.com/thumbor/xaBWKotj8isJdnSYJoRLnw0Ceok=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10838101/omegalul.jpg.jpg")
defmeme("endmeemoji","https://img.4plebs.org/boards/pol/image/1484/23/1484239346536.png")
});
client.on('error', console.error);
var token;
token=fs.readFileSync("token.txt");
token = token.toString().trim();
console.log("Successfully read token: "+token);
client.login(token);
