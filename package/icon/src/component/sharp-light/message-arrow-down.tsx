
import { Icon } from "../../index";

/**
 * A component that renders the `message-arrow-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-down?s=sharp-light message-arrow-down}
 * @preview ![message-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-arrow-down.svg)
 */
const MessageArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-32 0-96 0L0 416l0-32L0 32 0 0 32 0 480 0l32 0 0 32 0 352 0 32-32 0-176 0L192 490.7 160 512l0-38.5 0-25.5 0-32zm0-32l32 0 0 32 0 36.2 94.2-62.8 8.1-5.4 9.7 0 176 0 0-352L32 32l0 352 128 0zM272 112l0 153.4 52.7-52.7L336 201.4 358.6 224l-11.3 11.3-80 80L256 326.6l-11.3-11.3-80-80L153.4 224 176 201.4l11.3 11.3L240 265.4 240 112l0-16 32 0 0 16z" />
    </Icon>
);

export default MessageArrowDown;