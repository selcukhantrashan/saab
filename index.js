const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'TOKEN', totalShards: 2  });

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}\nWorking....`));