
import { Icon } from "../../index";

/**
 * A component that renders the `message-pen` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-pen?s=thin message-pen}
 * @preview ![message-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/message-pen.svg)
 */
const MessagePen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 416c0-8.8-7.2-16-16-16l-96 0c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-138.7 0c-3.5 0-6.8 1.1-9.6 3.2L176 496l0-80zM64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l80 0 16 0 0 16 0 64c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM164.6 299.4c4 4 9.7 5.6 15.2 4.2l36.7-9.2c5.6-1.4 10.8-4.3 14.9-8.4L341 176.4c14.7-14.7 14.7-38.6 0-53.4s-38.6-14.7-53.4 0L178 232.6c-4.1 4.1-7 9.2-8.4 14.9l-9.2 36.7c-1.4 5.5 .2 11.2 4.2 15.2zm15.7-28.9l4.8-19.1c.7-2.8 2.2-5.4 4.2-7.4L275 158.3 305.7 189 220 274.7c-2.1 2.1-4.6 3.5-7.4 4.2l-19.1 4.8-17.6 4.4 4.4-17.6zM329.7 165.1L317 177.7 286.3 147l12.6-12.6c8.5-8.5 22.3-8.5 30.7 0s8.5 22.3 0 30.7z" />
    </Icon>
);

export default MessagePen;