const NATS = require('nats')

const servers = ["localhost:4222"  ]
const nc = NATS.connect({servers: servers})
nc.subscribe('zoa-v2', (err, m) => {
    if (err) {
        console.log("ERROR: ", err)
    }
    const {subject, data, sid, reply} = m
    console.log(subject, data, sid, reply)
}, {max: 100, expected: 1, queue: 'queue'})
