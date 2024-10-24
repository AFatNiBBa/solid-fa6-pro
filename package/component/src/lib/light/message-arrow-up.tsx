
import { Icon } from "../../index";

/**
 * A component that renders the `message-arrow-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-up?s=light message-arrow-up}
 * @preview ![message-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/message-arrow-up.svg)
 */
const MessageArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 416c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 288c0 17.7-14.3 32-32 32l-138.7 0c-6.9 0-13.7 2.2-19.2 6.4L192 464l0-48zM64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l64 0 32 0 0 32 0 48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM272 304l0-153.4 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-80-80c-6.2-6.2-16.4-6.2-22.6 0l-80 80c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L240 150.6 240 304c0 8.8 7.2 16 16 16s16-7.2 16-16z" />
    </Icon>
);

export default MessageArrowUp;