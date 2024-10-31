
import { Icon } from "../../index";

/**
 * A component that renders the `message-smile` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-smile?s=sharp-thin message-smile}
 * @preview ![message-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/message-smile.svg)
 */
const MessageSmile: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-16 0L16 416 0 416l0-16L0 16 0 0 16 0 496 0l16 0 0 16 0 384 0 16-16 0-192 0L176 501.3 160 512l0-19.2 0-60.8 0-16zm0-16l16 0 0 16 0 66.1 119.1-79.4 4-2.7 4.8 0 192 0 0-384L16 16l0 384 144 0zm32-256a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm128 0a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM167.2 244.7l5.3 6C193 273.6 222.8 288 256 288s63-14.4 83.5-37.3l5.3-6 11.9 10.7-5.3 6C328 287.5 293.9 304 256 304s-72-16.5-95.4-42.7l-5.3-6 11.9-10.7z" />
    </Icon>
);

export default MessageSmile;