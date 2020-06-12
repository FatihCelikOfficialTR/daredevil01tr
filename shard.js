const { ShardingManager } = require ('discord.js')
const ayarlar = require ('./ayarlar.json')

const shards = new ShardingManager ('./server.js', {

token : ayarlar.token,

totalShards : 1 //--Glitch kullanıyorsan 1'i geçmeni tavsiye etmem, güçlü bir vds'en varsa 3 yapsan yeterli.

});

shards.on('launch', shard => {
    console.log(`${shard.id}. Shard Açıldı!`);
});

shards.on('message', (shard, msg) => {
});

shards.spawn()