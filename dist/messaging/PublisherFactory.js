"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RabbitMessagePublisher_1 = require("./RabbitMessagePublisher");
/**
 * Efetua a criação do Publisher
 */
class PublisherFactory {
    createPublisher() {
        if (!this.publisher) {
            this.publisher = new RabbitMessagePublisher_1.RabbitMessagePublisher("amqp://localhost:5672", "test");
        }
        return this.publisher;
    }
}
exports.PublisherFactory = PublisherFactory;
