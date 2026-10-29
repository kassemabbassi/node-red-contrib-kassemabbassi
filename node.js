module.exports = function (RED) {
    function KassemNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.mode = config.mode;

        node.on('input', function (msg, send, done) {
            var value = Number(msg.payload);

            if (isNaN(value)) {
                node.error("Le payload doit être un nombre", msg);
                if (done) { done(); }
                return;
            }

            if (node.mode === "f2c") {
                msg.payload = Math.round(((value - 32) * 5 / 9) * 100) / 100;
                msg.unit = "°C";
            } else {
                msg.payload = Math.round(((value * 9 / 5) + 32) * 100) / 100;
                msg.unit = "°F";
            }

            send = send || function () { node.send.apply(node, arguments); };
            send(msg);
            if (done) { done(); }
        });
    }
    RED.nodes.registerType("kassem", KassemNode);
}