const Discord = require('discord.js')

const config = require('../config.json')

module.exports = {

  name: "order",

  aliases: ["info"],

  description: "shows the current order of the guild.",

  execute: async(client, message, args, data, db) => {

   

    if (data.code == 0) return message.channel.send(`There isn't any order in this guild.`)

    

    let bar = []

    

    let progress = data.uses

    

    for (let i = 0;i < 10;i++) {

      progress = progress - (data.orders / 10)

      if (progress > 0) bar.push(`#`)

      else bar.push(`=`) 

    }

    

    let warn = ""

    

    await client.fetchInvite('https://discord.gg/' + data.code).catch(e => warn = "The invite link of this guild is expired! Please make a new order or no one will be able to join here!")

    

    let embed = new Discord.RichEmbed()

    .setColor(config.embedColor)

    .setTitle(`${message.guild.name} Order:`)

    .addField(`Want Faster Order:`, `Try voting the bot **__[Vote : ${client.user.username}]()__** you'll get a faster order completion!`) 

    .setDescription(`Order: ${data.orders}\nProgress: ${bar.join("")} ${data.uses}/${data.orders}`)

    message.channel.send(warn, embed) 

  } 

} 