const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () =>{
  
  console.log("Chanchlani Bot is online")
  
})

client.on('message', msg=>{
  
  
 if(msg.content === "taarif"){
    msg.reply('https://tenor.com/view/ashish-chanchlani-waah-waah-taarif-kar-raha-he-gif-18773741')
 }
  
 if(msg.content === "gussa"){
      msg.reply('https://tenor.com/view/mishtersami-ashish-ashishchinchilani-itnamaruga-gif-19828548')
 }
  
 if(msg.content === "mazza"){
    msg.reply('https://tenor.com/view/mishtersami-ashish-ashishchinchilani-birijalily-dingdong-gif-19828524')
 }
  
 if(msg.content === "gn"){
    msg.reply('https://tenor.com/view/mishtersami-ashish-ashishchinchilani-goodmorning-goodnight-gif-19828592')
}
          
})
client.login(process.env.BOT_TOKEN);
