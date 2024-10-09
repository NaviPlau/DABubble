import { UserInterface } from "../../landing-page/interfaces/userinterface";
import { Message } from "./message";

export interface Channel {
    channelID: string,
    title: string,
    description: string,
    createdBy: string,
    user: UserInterface[],
    messages: Message[],
}
