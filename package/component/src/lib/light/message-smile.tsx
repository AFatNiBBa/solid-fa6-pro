
import { Icon } from "../../index";

/**
 * A component that renders the `message-smile` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-smile?s=light message-smile}
 * @preview ![message-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/message-smile.svg)
 */
const MessageSmile: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 416c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 288c0 17.7-14.3 32-32 32l-138.7 0c-6.9 0-13.7 2.2-19.2 6.4L192 464l0-48zM64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l64 0 32 0 0 32 0 48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM192 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm128 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM155.9 252.1c-6.6 5.9-7.1 16-1.3 22.6C179.5 302.5 215.7 320 256 320s76.5-17.5 101.4-45.3c5.9-6.6 5.3-16.7-1.3-22.6s-16.7-5.3-22.6 1.3C314.5 274.6 286.8 288 256 288s-58.5-13.4-77.5-34.7c-5.9-6.6-16-7.1-22.6-1.3z" />
    </Icon>
);

export default MessageSmile;