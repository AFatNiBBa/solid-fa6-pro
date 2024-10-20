
import { Icon } from "../../index";

/**
 * A component that renders the `message-pen` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-pen?s=light message-pen}
 * @preview ![message-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/message-pen.svg)
 */
const MessagePen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 416c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 288c0 17.7-14.3 32-32 32l-138.7 0c-6.9 0-13.7 2.2-19.2 6.4L192 464l0-48zM64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l64 0 32 0 0 32 0 48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM316.3 147.7c4.9 4.9 4.9 12.9 0 17.8l-8.1 8.1-17.8-17.8 8.1-8.1c4.9-4.9 12.9-4.9 17.8 0zM207.1 239.1l60.7-60.7 17.8 17.8L224.8 257c-2.1 2.1-4.6 3.5-7.4 4.2L198 266l4.9-19.5c.7-2.8 2.2-5.4 4.2-7.4zM275.8 125l-91.4 91.5c-6.1 6.2-10.5 13.9-12.6 22.3l-11.3 45.3c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l45.3-11.3c8.4-2.1 16.2-6.5 22.3-12.6l91.4-91.5c17.4-17.4 17.4-45.6 0-63c-17.4-17.4-45.7-17.4-63.1 0z" />
    </Icon>
);

export default MessagePen;