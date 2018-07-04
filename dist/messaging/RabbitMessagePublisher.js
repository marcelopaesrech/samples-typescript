"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Amqp = require("amqp-ts");
/**
 * Publisher para rabbit mq
 */
class RabbitMessagePublisher {
    constructor(url, exchangeName) {
        this.connection = new Amqp.Connection(url);
        this.exchange = this.connection.declareExchange(exchangeName);
        this.queue = this.connection.declareQueue("test");
        this.queue.bind(this.exchange);
    }
    send(messageId, messageContent) {
        const callback = () => {
            console.log("publishing message");
            let message = new Amqp.Message(messageId + "|" + messageContent);
            this.exchange.send(message);
            console.log("message published");
        };
        this.connection.completeConfiguration().then(callback);
        return messageId;
    }
}
exports.RabbitMessagePublisher = RabbitMessagePublisher;
