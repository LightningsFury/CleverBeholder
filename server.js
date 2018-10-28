const timestamp = new Date().getTime()
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
  http.get(`http://gamio.glitch.me/`);
  http.get(`http://moat.glitch.me/`);
  http.get(`http://utility-api.glitch.me/`);
  http.get(`http://not-a.glitch.me/`);
  http.get(`http://chatbot-py.glitch.me/`);
});
app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();
const brain = require('brain.js');
let trainingData = 
    [{input: "hello henlo man", output: {ontopic: 1}},
    {input: "hi owo what ya doing", output: {ontopic: 1}},
    {input: "lol that's cool", output: {ontopic: 1}},
    {input: "wassup how's your account", output: {ontopic: 1}},
    {input: "doing homework with my gf wanna play", output: {offtopic: 1}},
    {input: "playing fort anyone wanna duel?", output: {offtopic: 1}},
    {input: "Playing PUBG guys listening to this song.", output: {offtopic: 1}},
    {input: "join my WoW game", output: {offtopic: 1}},
    {input: "in hostpital", output: {offtopic: 1}},
    {input: "playing helmet heroes", output: {ontopic: 1}},
    {input: "grinding repguanas, it's really killing me", output: {ontopic: 1}},
    {input: "I'm dying with proteums", output: {ontopic: 1}},
    {input: "GayBlox not nice Offblox is", output: {offtopic: 1}},
    {input: "Why is there a region ban", output: {ontopic: 1}},
    {input: "use a vpn, nord VPN is good", output: {ontopic: 1}},
    {input: "get into a WoW game with me", output: {offtopic: 1}},
    {input: "Just got a battle royale in fort nut!", output: {offtopic: 1}},
    {input: "Please UPDATE game robby", output: {ontopic: 1}},
    {input: "Why is there a region ban on fortnite", output: {offtopic: 1}},
    {input: "This song is so good look", output: {offtopic: 1}},
    {input: "Open the news and it's all about catholics fking children", output: {offtopic: 1}},
    {input: "what is your IGN PHANTOm?", output: {ontopic: 1}},
    {input: "u can buy ultoch's mag killer (1 shot) for like 2bil at pet adoption disctrict", output: {ontopic: 1}},
    {input: "can anyone help about Locked PH access", output: {ontopic: 1}},
    {input: "Buy super pet for 800m cool", output: {ontopic: 1}},
    {input: "we are young life iz fun we got to make the most of it make the most of it injoy it while it lasts", output: {offtopic: 1}},
    {input: "Did cosmic said anything about outlast? Buying pet in hh", output: {ontopic: 1}},
    {input: "Just mention that he's from a third world south asian country", output: {offtopic: 1}},
    {input: "My surgery is in a few hours gotta go die", output: {offtopic: 1}},
    {input: " Am lvled up 110 times in da last 2 hours oWo", output: {ontopic: 1}},
    {input: "ass ass titty sex shit", output: {offtopic: 1}},
    {input: "uh ig tixs there were so many blowhorns at the time. am hper am typing slow oof. there like 400k each right maybeill reset to mage", output: {ontopic: 1}},
    {input: "gucci gang gucci gang gang GUCCI GANG GUCCI Gang", output: {offtopic: 1}},
    {input: "Sell milleneun set gemstone staff 2omega luck proof and 2 ride pet Def mode omega proof offer dm me if u want and buy rep killer", output: {ontopic: 1}},
    {input: "selling rob lox stuff offblox 99$", output: {offtopic: 1}},
    {input: "UGH I JUST died in HH", output: {ontopic: 1}},
    {input: "with substitution you literally just add, subtract, multiply, divide, square, or square root from two sides, one at a time", output: {offtopic: 1}},
    {input: "My Algebra 2 final is going to be mostly figuring out nPr vs nCr and finding the path of a sine or cosine wave", output: {offtopic: 1}},
    {input: "My pet is called wuiplayer", output: {ontopic: 1}},
    {input: "My new ccount is called robloxoffbloxPlayer223", output: {ontopic: 1}},
    {input: "this KID is soo dumb ommg ", output: {offtopic: 1}},
    {input: "Give me stick please im begging not my internet", output: {ontopic: 1}},
    {input: "My new account is called oofbloxPlayer2243", output: {ontopic: 1}},
    {input: " u robo s1 has been few hour I can't log on", output: {ontopic: 1}},
    {input: "im actually looking for the exact year on it for a spec sheet nissan sunny 2000", output: {offtopic: 1}}, 
    {input: "This boss is sp hard OMGG it's killing me", output: {ontopic: 1}}, 
    {input: "I'm playing LoL with this boss", output: {offtopic: 1}},
    {input: "Mithril set cost: 14,500,000 (without god daggers), 20,700,000 million (With god daggers)", output: {ontopic: 1}},
    {input: "Us filipinos on FB are bad owo", output: {ontopic: 1}},
    {input: "She dumped me on FaceBook like wtf ", output: {offtopic: 1}},
    {input: "I'm from Bangladesh pal not american", output: {offtopic: 1}},
    {input: "Hello", output: {ontopic: 1}},
    {input: "Bonjour", output: {ontopic: 1}},
    {input: "this is stupid.", output: {ontopic: 1}},
     {input: "I'm poor give my moneys", output: {ontopic: 1}},
     {input: "buying bi stick selling it", output: {ontopic: 1}},
     {input: "Buying tickets from USA", output: {ontopic: 1}},
     {input: "This is my grinding song", output: {ontopic: 1}},
     {input: "Send nudes pls", output: {offtopic: 1}},
     {input: "sir pls give me money", output: {ontopic: 1}},
     {input: "Selling this stuff 4m", output: {ontopic: 1}},
     {input: "Grinding beholders", output: {ontopic: 1}},
     {input: "grinding thee bouncers.", output: {ontopic: 1}},
     {input: "Am saw peeps selling tixs at green bouncer play today for 700k each wtf ", output: {ontopic: 1}},
     {input: "These plant monsters are hard", output: {ontopic: 1}},
     {input: "Bleepity bleeping hell this monster", output: {ontopic: 1}},
     {input: "the game is still broken", output: {ontopic: 1}},
     {input: "these monsters so hard man", output: {ontopic: 1}},
     {input: "kreetus is the hardest boss", output: {ontopic: 1}},
     {input: "do you sell tix?", output: {ontopic: 1}},
     {input: "aaaa", output: {ontopic: 1}},
     {input: "mILLENIAL armor is like 300m", output: {ontopic: 1}},
     {input: "phantom robes for 300k", output: {ontopic: 1}},
     {input: "tomsen is spotting", output: {ontopic: 1}},
     {input: "How ya doin?", output: {ontopic: 1}},
     {input: "Ask coke man", output: {ontopic: 1}},
     {input: "Wanna get boosted?", output: {ontopic: 1}},
     {input: "how much is a boost", output: {ontopic: 1}},
     {input: "ur such a noob", output: {ontopic: 1}},
     {input: "I have lots of money", output: {ontopic: 1}},
     {input: "everything back to normal", output: {ontopic: 1}},
     {input: "There a froum drama going on", output: {ontopic: 1}},
     {input: "he's so bad on forums", output: {ontopic: 1}},
     {input: "everything back to normal", output: {ontopic: 1}},
     {input: "@somebody#9099", output: {ontopic: 1}},
     {input: "@ur mom#4836", output: {ontopic: 1}},
     {input: "stop it faggot", output: {offtopic: 1}},
     {input: "hes so p2w", output: {ontopic: 1}},
     {input: "this p2w kid", output: {ontopic: 1}},
     {input: "you should be f2p", output: {ontopic: 1}},
     {input: ":rip:", output: {ontopic: 1}},
     {input: "gay", output: {ontopic: 1}},
     {input: "Donald trump is bad", output: {offtopic: 1}},
     {input: "something*", output: {ontopic: 1}},
     {input: "kim kardashian needs this", output: {offtopic: 1}},
     {input: "help me pls", output: {ontopic: 1}},
     {input: "How much is shiny fish?", output: {ontopic: 1}},
     {input: "buy the shield", output: {ontopic: 1}},
     {input: "forums in 2014", output: {ontopic: 1}},
     {input: "i joined 2016", output: {ontopic: 1}},
     {input: "#banwaseem", output: {ontopic: 1}},
     {input: "can I be unabnned", output: {ontopic: 1}},
     {input: "see my dubstep playlist", output: {offtopic: 1}},
     {input: "i listen to metalcore playlists", output: {offtopic: 1}}, 
     {input: "Hell, some of the bugs from 9.0 still haven't been fixed", output: {ontopic: 1}},
     {input: "#bug isn't fixed", output: {ontopic: 1}},
     {input: "gay fort is hack", output: {offtopic: 1}}, 
     {input: "rob locks is gay", output: {offtopic: 1}}, 
     {input: "ligma balls", output: {offtopic: 1}}, 
     {input: "bawss got banned", output: {offtopic: 1}}, 
     {input: "wrangler set looks cool", output: {ontopic: 1}},
     {input: "I have homework", output: {offtopic: 1}},
     {input: "wanna have sex", output: {offtopic: 1}},
     {input: "ur boobs are nice", output: {offtopic: 1}},
    {input: "he speaks filipino", output: {ontopic: 1}},
     {input: "that's alot of exp", output: {ontopic: 1}},
     {input: "0.999999996194441 > 3.6112142686280033e-9", output: {offtopic: 1}},
     {input: "architects is a nice band", output: {offtopic: 1}},
     {input: "like your forum posts", output: {ontopic: 1}}, 
     {input: "It is if I will be doing multiple paragraphs", output: {ontopic: 1}},
     {input: "tthat's how much money jarsu has", output: {ontopic: 1}}, 
     {input: "Btw can ya'll post your opinions or suggestions on here http://www.helmet-heroes.com/forum/viewtopic.php?f=5&t=65084 i wanna do a thing", output: {ontopic: 1}}, 
     {input: "we've started you off with Express, http://bit.ly/2JfCsDw thinking of doing an art contest with this", output: {ontopic: 1}}, 
     {input: "https://twitter.com/onetapaway this is what i get when googling it", output: {offtopic: 1}}, 
     {input: "https://www.tenor.co/xk4b.gif lol", output: {offtopic: 1}}, 
     {input: "https://i.imgur.com/CgWQ4Xu.png", output: {ontopic: 1}}, 
     {input: "servers are down", output: {ontopic: 1}}, 
     {input: "mean i wish i knew what country has strongest players", output: {ontopic: 1}}, 
     {input: "Well that jhoelm guy or wtvr his name is like kakai but espaniol and atleast poweredfisky guild doesn't make alot'o drama and don't have much of an attitude compared to Davao Chapter and 2 members", output: {ontopic: 1}}, 
     {input: "mhttps://youtu.be/7AkgsB_Y5CE    weird af...", output: {ontopic: 1}},
     {input: "need to ask ~~if he remembers the pass~~", output: {ontopic: 1}},
     {input: "atomic robes are expensive", output: {ontopic: 1}},
     {input: "uh he's taking marine engineering but stopped for a break he'll get back on next sem he's currently on his 3rd ye", output: {offtopic: 1}},
     {input: "but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit.", output: {offtopic: 1}},
     {input: "lol green beanies", output: {ontopic: 1}},
     {input: "pretty sure am just died to tfue", output: {ontopic: 1}},
     {input: "went on University of Cebu - Lapu-Lapu Mandaue", output: {offtopic: 1}},
     {input: "it just dropped an oriental hat", output: {ontopic: 1}},
     {input: "excuse me what the eff", output: {ontopic: 1}},
     {input: "wanna see my stats", output: {ontopic: 1}},
     {input: "reeeeeeeeeeeeeeeee", output: {offtopic: 1}}, 
     {input: "can i donate", output: {ontopic: 1}},
     {input: "where are staff", output: {ontopic: 1}},
     {input: "he should get muted", output: {ontopic: 1}},
     {input: "i joined dunamis", output: {ontopic: 1}},
     {input: "going to eat food bye", output: {offtopic: 1}},
     {input: "Mh 3.5k magic snd 700 def 6k mp at lvl 243 :joysweat_smile:", output: {ontopic: 1}},
     {input: "how beepity beeping rare are these fishz", output: {ontopic: 1}},
     {input: "But with ultra set I should be mong proof", output: {ontopic: 1}},
     {input: "Tomorow, are you still going to buy wrangler set with rad? xD", output: {ontopic: 1}},
    {input: "But also this month I will buy 1b and something", output: {ontopic: 1}},
     {input: "omae wa shinduru kame hame haaa", output: {offtopic: 1}},
     {input: " ฟнαт ∂ε ℓïƒт  ฟнαт ∂ε ℓïƒт", output: {offtopic: 1}},
     {input: "'m pretty sure it won't do anything. Hell, he even has the ability to delete your messages before doing anything", output: {ontopic: 1}},
     {input: "<#413305311999557632>", output: {ontopic: 1}},
     {input: "what exactly i scammed from him?", output: {ontopic: 1}},
     {input: "how much robux?", output: {offtopic: 1}},
     {input: "does someone here selling spellbound wands??", output: {ontopic: 1}},
     {input: "that big penis", output: {offtopic: 1}},
     {input: "join the music room", output: {offtopic: 1}},
     {input: "what song is this", output: {offtopic: 1}},
     {input: "how to use the music bot", output: {offtopic: 1}},
     {input: "I'm getting 30 fps", output: {ontopic: 1}},
     {input: "But u will have to wait some days bcs I have to get from my friend acc", output: {ontopic: 1}},
     {input: "Is Brude's event will start tomorrow?", output: {ontopic: 1}},
     {input: "Like yesterday if im not mistaken, i said \" Hi Sir Brude\" when im asking about the event XD", output: {ontopic: 1}},
     {input: "now gonna buy hydro wands for 7m each", output: {ontopic: 1}},
     {input: "getting blue shrooms at wasteland woods for 2 hours", output: {ontopic: 1}},
     {input: "looking for a pilot", output: {ontopic: 1}},
     {input: "looking for someone to chop", output: {ontopic: 1}},
     {input: "Please sir free item", output: {ontopic: 1}},
     {input: "isa467 should be bannned", output: {ontopic: 1}},
     {input: "How much would you do shiny feen and shiny guppy", output: {ontopic: 1}},
     {input: "this mag killer", output: {ontopic: 1}},
     {input: "this kid should be muted", output: {offtopic: 1}},
     {input: "i like playing terr aria ish", output: {offtopic: 1}},
     {input: "your flippity flipping bad at fortnut", output: {offtopic: 1}},
     {input: "https://www.youtube.com/watch?v=yZIummTz9mM Basically a suicide line.", output: {offtopic: 1}},
     {input: "can I be verified?", output: {ontopic: 1}},
     {input: "Pupper may have ate half of her cone but she's still kute", output: {offtopic: 1}},
     {input: "masturbate till ur quackity quack explod", output: {offtopic: 1}},
     {input: "act like spongebob squarepants", output: {offtopic: 1}},
     {input: "i'm watching yt", output: {offtopic: 1}},
     {input: "i'm watching netflix", output: {offtopic: 1}},
     {input: "im watching nextflix", output: {offtopic: 1}},
     {input: "im watching hh gaming videos", output: {ontopic: 1}},
     {input: "im watchin gaming videos", output: {offtopic: 1}},
     {input: "new avatar from anime", output: {offtopic: 1}},
     {input: "what anime?", output: {offtopic: 1}},
     {input: "got hacked in rotmg", output: {offtopic: 1}},
     {input: "playing guitar with my pals", output: {offtopic: 1}},
     {input: "but some guy beat me to it...", output: {ontopic: 1}},
     {input: "selling ricardo in my vendor", output: {ontopic: 1}},

];
// uh he's taking marine engineering but stopped for a break he'll get back on next sem he's currently on his 3rd ye
// {input: "", output: {offtopic: 1}},
// {input: "", output: {ontopic: 1}},

let recently = new Set();

let config = {
    iterations: 5000,
    log: true,
    logPeriod: 5,
    learningRate: 0.2,

  }

let highest = trainingData.map(val => val.input.length).sort((b, a) => a-b)[0]


function encode(arg) {
    let res = arg.split('').map(x => (x.charCodeAt(0) > 255 ? 0.1: x.charCodeAt(0) / 255));
    while (res.length < highest) {
	    res.push(0);
    }
    return res // encodes the letters into numbers from the charcode, and if the charcode is too high it just gives 0.1
 }
 
function processTrainingData(data) {
    return data.map(d => {
        return {
            input: encode(d.input.toLowerCase()),
            output: d.output
        }
    })
 }


let net = new brain.NeuralNetwork();

net.train(processTrainingData(trainingData), config)//.then(res => console.log('done ', res)).catch(e=>console.error(e))
let exec = net.toFunction()

client.on('reconnecting', () => {
console.log('I Am Currently Reconnecting, Please Hang Tight!')
});

client.on('disconnect', () => {
console.log('I Have Disconnected, So I Am Now Trying To Reconnect. Hang Tight!')
});

client.on('ready', () => {
  console.log('BOT STARTED UP!');
});

client.on('ready', async () => {
  client.user.setActivity("protects us from the gays", {url: "https://www.helmetheroeschat.com"});
  console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);
  const dur = new Date().getTime() - timestamp
  let time;
    const m = await client.channels.get('464544982263660544')
        .send({
            embed: {
                color: 4447003,
                title: 'Bot has started up!',
                description: `Getting API Latency`,
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: `${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`
                }
            }
        }).then(time = Date.now()).catch(console.error);
    m.edit({
        embed: {
            color: 4447003,
            title: 'Bot has started up!',
            description: `API Latency is ${Math.round(client.ping)}ms.\nLatency is ${m.createdTimestamp - time}ms\nTook ${dur}ms to log in.\nCurrent uptime is ${client.uptime}ms.`,
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: `${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`
            }
        }
    });
});
let recentMsgs = []
let levels = 0;
let wait = require('util').promisify(setTimeout);
client.on('message', async msg=> {
  let m = msg.content
  let remind = async (max) => {
    let sent = await msg.channel.send('Friendly remind: This channel is only for Helmet Heroes related topics. Go to <#413305311999557632> for other conversations.\nFailure to comply with this may result in a ban from this channel. \n');
    sent.delete(5000)
    msg.guild.channels.get('411875007992692739').send('<@!326483019349098506> '+msg.content+' '+max)
  }
  let args = msg.content.split(/ +/gi);
  args.shift()
  let message = args.join(' ');
  if (msg.author.bot && !msg.webhookID) return;
  if (msg.content.startsWith("..test")) {

    if (!args) return msg.reply('ur gonna break evryting')
    console.log(args.join(' '))
    let res = exec(encode(args.join(' ').toLowerCase()))
    msg.reply(JSON.stringify(res));
    return;
    
  }
  if (msg.content.startsWith("..eval")) {
    try {
      let res = eval(message);
      msg.reply('```'+res+'```');
    } catch(e) {
      msg.reply('you did a fucl: '+e)
    }
  }
  if (msg.channel.id !== "395177531805794304") return;
  if (m.startsWith('?') || m.length < 6 || m.length > 70) return;
  recentMsgs.push(1)
  let res = exec(encode(msg.content))
  console.log(msg.content, res)
  if (res.offtopic > 0.7) levels += res.offtopic;  
  let max = ((recentMsgs.length / 10) * 10) * 0.8;
  max = max < 1 ? 3 : max;
  console.log(levels, max)
  if (levels > max) {
    remind(max)
    levels = 0;
  }
  
});

  setInterval(() => {
    levels = 0
    recentMsgs = [];
  }, 1000 * (60 * 3))

  client.on("error", (e) => console.error(e));
  client.on("warn", (e) => console.warn(e));
  client.on("debug", (e) => console.info(e));

client.login('NTA1MDA3NTYyMTE5NDQ2NTI5.DrNUzQ.TxoExID0ASZFl7jyhSYNgHfavEk');