import * as Amqp from "amqp-ts";
import { IPublisher } from "./IPublisher";
import { RabbitMessagePublisher } from "./RabbitMessagePublisher";

/**
 * Efetua a criação do Publisher
 */
export class PublisherFactory {

    private publisher:IPublisher;

    createPublisher():IPublisher{
        if (!this.publisher) {
            this.publisher = new RabbitMessagePublisher("amqp://localhost:5672", "test");
        }
        return this.publisher;
    }

}