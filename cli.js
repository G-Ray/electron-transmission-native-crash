const Transmission = require('transmission-native')

let tr

const startTransmission = async () => {
    tr = new Transmission("./transmission", "transmission");
    const response = await tr.request({
      method: "session-get",
      arguments: { fields: ["version"] },
    });

    console.log("Transmission version:", response.arguments.version);
  };

  process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    tr.close()
    process.exit();
});
  
  startTransmission();