// !!! PEOPLE FROM HELP COMMAND SCROLL DOWN TO LINE 37 !!!
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
  client.user.setActivity('m!help', { type: 'WATCHING' });
});


client.on('message', message => {
function defmeme(id,extension) {
	if (message.content === ("m!"+id)) {
		message.delete(1000);
		console.log(message.author.username+" used "+id)
		const attachment = new Attachment("./data/"+id+"."+extension);
		message.reply(attachment);
	}
}

if (message.content === ("m!help")) {
	message.reply("https://github.com/Daniel-Bradbury/MayMay/blob/master/index.js");
}
if (message.content === ("m!git")) {
	message.reply("https://github.com/Daniel-Bradbury/MayMay");
}

// MEME LIBRARY
// PREFIX: "m!"

defmeme("politecat","jpg")
defmeme("lenny","webp")
defmeme("doge","jpg")
defmeme("bork","jpg")
defmeme("groovin","jpg")
defmeme("bruhmentum","jpg")
defmeme("lphil","jpg")
defmeme("longdoge","jpg")
defmeme("snekcat","jpg")
defmeme("pepe","jpg")
defmeme("derp","jpg")
defmeme("shookderp","gif")
defmeme("starkderp","gif")
defmeme("crycat","jpg")
defmeme("tmyk","jpg")
defmeme("wat","jpg")
defmeme("challengereligion","jpg")
defmeme("takemymoney","jpg")
defmeme("jojolick","gif")
defmeme("jojopunch","gif")
defmeme("dekuheadbang","gif")
defmeme("blink","gif")
defmeme("fbiwantslocation","png")
defmeme("bekfast","jpg")
defmeme("derpcat","jpg")
defmeme("areyousure","gif")
defmeme("hahayes","png")
defmeme("defdance","gif")
defmeme("wry","gif")
defmeme("pepetriggered","jpg")
defmeme("ohyou","jpg")
defmeme("nuke","gif")
defmeme("spideronion","jpg")
defmeme("sanslmao","png")
defmeme("unoreverse","png")
defmeme("derptrump","png")
defmeme("feelsraveman","gif")
defmeme("villagertriggered","gif")
defmeme("omegalul","webp")
defmeme("endmeemoji","png")
defmeme("hmm","jpg")
defmeme("peloangry","webp")
defmeme("peloangry2","webp")
defmeme("pelocringe","webp")
defmeme("pelocrushed","webp")
defmeme("pelocursed","webp")
defmeme("pelocute","webp")
defmeme("pelodance","webp")
defmeme("pelogrumpy","webp")
defmeme("pelohappy","webp")
defmeme("pelohug","webp")
defmeme("pelomiddlefinger","webp")
defmeme("pelopeace","webp")
defmeme("peloscream","webp")
defmeme("pelosinister","webp")
defmeme("pelosmile","webp")
defmeme("pelowut","webp")
defmeme("shocked","png")
defmeme("beegyoshi","gif")
defmeme("godgone","jpg")
defmeme("watching","jpg")
defmeme("wholemilk","jpg")
defmeme("kermitsuicide","gif")
defmeme("spongedance","gif")

});
client.on('error', console.error);
var token;
token=fs.readFileSync("token.txt");
token = token.toString().trim();
console.log("Successfully read token: "+token);
client.login(token);
