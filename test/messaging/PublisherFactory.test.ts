import {PublisherFactory} from "../../src/messaging/PublisherFactory";
import {IPublisher} from "../../src/messaging/IPublisher";
import {expect} from "chai";
import "mocha";
import { RabbitMessagePublisher } from "../../src/messaging/RabbitMessagePublisher";


describe("createPublisher", () => {
    it("It should not throw an Error", () => {
        const pub:PublisherFactory = new PublisherFactory();
        expect(pub.createPublisher).to.not.throw();
    });
    it("should return IPublisher instance", () => {
        const pub:PublisherFactory = new PublisherFactory();
        expect(pub.createPublisher).to.satisfy((func) => {
            let value = func.call();
            return (value instanceof RabbitMessagePublisher);
        });
    });
});