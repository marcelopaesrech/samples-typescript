import * as Amqp from "amqp-ts";
import {IPublisher} from "./IPublisher";

/**
 * Publisher para rabbit mq
 */
export class RabbitMessagePublisher implements IPublisher{

    private connection:Amqp.Connection;
    private exchange:Amqp.Exchange;
    private queue:Amqp.Queue;

    constructor(url:string, exchangeName:string) {
        this.connection = new Amqp.Connection(url);
        this.exchange = this.connection.declareExchange(exchangeName);
        this.queue = this.connection.declareQueue("test");
        this.queue.bind(this.exchange);
    }

    public send(messageId:string, messageContent:string):string{
        const callback = () => {
            console.log("publishing message");
            let message:Amqp.Message = new Amqp.Message(messageId+"|"+messageContent);
            this.exchange.send(message);
            console.log("message published");
        };
        this.connection.completeConfiguration().then(callback);
        return messageId;
    }

}