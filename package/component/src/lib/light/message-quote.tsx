
import { Icon } from "../../index";

/**
 * A component that renders the `message-quote` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-quote?s=light message-quote}
 * @preview ![message-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/message-quote.svg)
 */
const MessageQuote: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 416c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 288c0 17.7-14.3 32-32 32l-138.7 0c-6.9 0-13.7 2.2-19.2 6.4L192 464l0-48zM64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l64 0 32 0 0 32 0 48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM208 144l0 24 0 24-48 0 0-48 48 0zm-48 80l48 0c-.9 21.2-15.6 39.4-36.3 44.6l-15.5 3.9c-8.6 2.1-13.8 10.8-11.6 19.4s10.8 13.8 19.4 11.6l15.5-3.9C215 290.7 240 258.7 240 222l0-30 0-24 0-24c0-17.7-14.3-32-32-32l-48 0c-17.7 0-32 14.3-32 32l0 48c0 17.7 14.3 32 32 32zm144-80l48 0 0 24 0 24-48 0 0-48zm48 80c-.9 21.2-15.6 39.4-36.3 44.6l-15.5 3.9c-8.6 2.1-13.8 10.8-11.6 19.4s10.8 13.8 19.4 11.6l15.5-3.9C359 290.7 384 258.7 384 222l0-30 0-24 0-24c0-17.7-14.3-32-32-32l-48 0c-17.7 0-32 14.3-32 32l0 48c0 17.7 14.3 32 32 32l48 0z" />
    </Icon>
);

export default MessageQuote;