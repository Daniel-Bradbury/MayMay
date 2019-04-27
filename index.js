const { Client, Attachment } = require('discord.js');

const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('MayMay ready.');
  // Link to git
  client.user.setActivity('tinyurl.com/maymaycode', { type: 'WATCHING' });
});


client.on('message', message => {
function defmeme(id,url) {
	if (message.content === ("m!"+id)) {
		message.delete(1000);
		const attachment = new Attachment(url);
		message.channel.send(attachment);
	}
}
// Meme library

defmeme("politecat","https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg")
defmeme("konodioda","https://www.myinstants.com/media/instants_images/it-was-me-dio.jpg")
defmeme("roadrollerda","https://i.ytimg.com/vi/t1y3QOIRsYs/maxresdefault.jpg")
defmeme("lenny","https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/1/12/SAMLpCt.jpg")
defmeme("howmanybreads","https://i.kym-cdn.com/photos/images/original/000/429/315/8ec.png")
defmeme("doge","https://assets.change.org/photos/4/io/uf/hPIouFKGvDQBjoM-800x450-noPad.jpg")
defmeme("bork","https://memesbams.com/wp-content/uploads/2017/10/28-Doge-Original-Image.jpg")
defmeme("groovin","https://cdn.discordapp.com/attachments/570255505809997824/571750591341002752/IMG-20190415-WA0003.jpg")
defmeme("bruhmentum","https://cdn.discordapp.com/attachments/570255505809997824/571750414752415764/rxbjadfqpbl21.jpg")
defmeme("lphil","https://cdn.discordapp.com/attachments/570255505809997824/571750184480931840/b3f5467.jpg")
defmeme("longdoge","http://i0.kym-cdn.com/photos/images/original/000/622/900/0ff.jpg")
defmeme("snekcat","http://i.imgur.com/fq46j1e.jpg")
defmeme("goatsmushrooms","https://i.kym-cdn.com/entries/icons/original/000/009/289/RHrLj-1.png")
defmeme("pepe","https://cdn.cnn.com/cnnnext/dam/assets/160927210830-tk-ah0927-large-169.jpg")
defmeme("derp","https://cdn.evoke.ie/2016/01/22153142/391.jpg")
defmeme("derpshook","https://i.imgur.com/4LoJVPN.gif")
defmeme("starkderp","https://i.imgur.com/7cMWZSB.gif")
defmeme("angercat","http://wfiles.brothersoft.com/s/scottish-fold-funny-face_95161-1440x900.jpg")
defmeme("crycat","https://i.kym-cdn.com/entries/icons/original/000/026/489/crying.jpg")
defmeme("tmyk","https://i.ytimg.com/vi/03QuygM0YB8/maxresdefault.jpg")
defmeme("wat","https://img.allw.mn/content/zl/ep/kb1gg0uo_500x498.jpg")
defmeme("wwwspider","https://i.imgflip.com/ljiam.jpg")
defmeme("challengereligion","http://www.quickmeme.com/img/e2/e21a589f46233c17cbc4b1f3b2ae1e1f63e6f941be40e5350d1c844af9dd4c6c.jpg")
defmeme("takemymoney","https://i.kym-cdn.com/photos/images/facebook/000/113/201/ShutUpAndTakeMyMoney.jpg")
defmeme("nani","https://i.ytimg.com/vi/vxKBHX9Datw/maxresdefault.jpg")
defmeme("jojolick","https://cdn.discordapp.com/attachments/562372678690930689/571779240693858306/lick-S1QzRJp7z.gif")
defmeme("jojopunch","https://saechaocirculation.files.wordpress.com/2016/12/star-platinum-vs-crazy-diamond.gif")

});

// BOT TOKEN OMMITED
