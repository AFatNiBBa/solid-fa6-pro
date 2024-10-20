
import { Icon } from "../../index";

/**
 * A component that renders the `message-quote` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-quote?s=regular message-quote}
 * @preview ![message-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/message-quote.svg)
 */
const MessageQuote: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 416c0-26.5-21.5-48-48-48l-96 0c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l384 0c8.8 0 16 7.2 16 16l0 288c0 8.8-7.2 16-16 16l-138.7 0c-10.4 0-20.5 3.4-28.8 9.6L208 432l0-16zm-.2 76.2l.2-.2 101.3-76L448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l48 0 48 0 0 48 0 4 0 .3 0 6.4 0 21.3c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L202.7 496l5.1-3.8zM160 112c-17.7 0-32 14.3-32 32l0 48c0 17.7 14.3 32 32 32l32 0 0 7.3c0 11.7-8.5 21.7-20.1 23.7l-7.9 1.3c-13.1 2.2-21.9 14.5-19.7 27.6s14.5 21.9 27.6 19.7l7.9-1.3c34.7-5.8 60.2-35.8 60.2-71l0-39.3 0-24 0-24c0-17.7-14.3-32-32-32l-48 0zm224 80l0-24 0-24c0-17.7-14.3-32-32-32l-48 0c-17.7 0-32 14.3-32 32l0 48c0 17.7 14.3 32 32 32l32 0 0 7.3c0 11.7-8.5 21.7-20.1 23.7l-7.9 1.3c-13.1 2.2-21.9 14.5-19.7 27.6s14.5 21.9 27.6 19.7l7.9-1.3c34.7-5.8 60.2-35.8 60.2-71l0-39.3z" />
    </Icon>
);

export default MessageQuote;