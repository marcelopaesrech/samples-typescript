

/**
 * Interface que determina os contratos a serem seguidos por um publisher
 */
export interface IPublisher {

    /**
     * Efetua o envio da mensagem
     * 
     * @param messageId 
     * @param messaContent 
     */
    send(messageId:string, messaContent:any):string;

}