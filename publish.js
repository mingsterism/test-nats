const NATS = require('nats')
const servers = ["localhost:4222"]
const nc = NATS.connect({servers:servers})

for (let x = 0; x < 10; x++) {

    nc.publish('boo', JSON.stringify({name: 'luke'}), (err) => {
        if (err) {
            console.log("ERROR: ", err)
        }
    })
}
