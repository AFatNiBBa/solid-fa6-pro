
import { Icon } from "../../index";

/**
 * A component that renders the `message-image` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-image?s=sharp-light message-image}
 * @preview ![message-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-image.svg)
 */
const MessageImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-32 0-96 0L0 416l0-32L0 32 0 0 32 0 480 0l32 0 0 32 0 352 0 32-32 0-176 0L192 490.7 160 512l0-38.5 0-25.5 0-32zm0-32l32 0 0 32 0 36.2 94.2-62.8 8.1-5.4 9.7 0 176 0 0-352L32 32l0 352 128 0zM104 128a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm184.4-9.5l12.2 15.7 112 144 3.4 4.3 0 5.5 0 16 0 16-16 0-288 0-16 0 0-16 0-16 0-5.6 3.5-4.4 64-80 11.2-14 12.6 12.6 19.6 19.6 68.8-82.5 12.7-15.3zm-.9 51l-67.3 80.7-11.2 13.5-12.4-12.4L177.3 232l-44.8 56 247.2 0L287.6 169.5z" />
    </Icon>
);

export default MessageImage;