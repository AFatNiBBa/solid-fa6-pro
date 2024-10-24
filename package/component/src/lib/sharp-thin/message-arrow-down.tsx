
import { Icon } from "../../index";

/**
 * A component that renders the `message-arrow-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-down?s=sharp-thin message-arrow-down}
 * @preview ![message-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/message-arrow-down.svg)
 */
const MessageArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-16 0L16 416 0 416l0-16L0 16 0 0 16 0 496 0l16 0 0 16 0 384 0 16-16 0-192 0L176 501.3 160 512l0-19.2 0-60.8 0-16zm0-16l16 0 0 16 0 66.1 119.1-79.4 4-2.7 4.8 0 192 0 0-384L16 16l0 384 144 0zM264 104l0 172.7 74.3-74.3 5.7-5.7L355.3 208l-5.7 5.7-88 88-5.7 5.7-5.7-5.7-88-88-5.7-5.7L168 196.7l5.7 5.7L248 276.7 248 104l0-8 16 0 0 8z" />
    </Icon>
);

export default MessageArrowDown;