
import { Icon } from "../../index";

/**
 * A component that renders the `message-pen` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-pen?s=regular message-pen}
 * @preview ![message-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/message-pen.svg)
 */
const MessagePen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 416c0-26.5-21.5-48-48-48l-96 0c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l384 0c8.8 0 16 7.2 16 16l0 288c0 8.8-7.2 16-16 16l-138.7 0c-10.4 0-20.5 3.4-28.8 9.6L208 432l0-16zm-.2 76.2l.2-.2 101.3-76L448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l48 0 48 0 0 48 0 4 0 .3 0 6.4 0 21.3c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L202.7 496l5.1-3.8zM340.8 123c-14.7-14.7-38.6-14.7-53.3 0L272.6 138l53.3 53.3 14.9-14.9c14.7-14.7 14.7-38.6 0-53.3zM178.1 232.5c-4.1 4.1-7 9.2-8.4 14.9L160.5 284c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l36.6-9.2c5.6-1.4 10.8-4.3 14.9-8.4l71.9-71.9L250 160.6l-71.9 71.9z" />
    </Icon>
);

export default MessagePen;