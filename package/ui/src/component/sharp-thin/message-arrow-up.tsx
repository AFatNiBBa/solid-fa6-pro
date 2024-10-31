
import { Icon } from "../../index";

/**
 * A component that renders the `message-arrow-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-up?s=sharp-thin message-arrow-up}
 * @preview ![message-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/message-arrow-up.svg)
 */
const MessageArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-16 0L16 416 0 416l0-16L0 16 0 0 16 0 496 0l16 0 0 16 0 384 0 16-16 0-192 0L176 501.3 160 512l0-19.2 0-60.8 0-16zm0-16l16 0 0 16 0 66.1 119.1-79.4 4-2.7 4.8 0 192 0 0-384L16 16l0 384 144 0zM264 296l0 8-16 0 0-8 0-172.7-74.3 74.3-5.7 5.7L156.7 192l5.7-5.7 88-88 5.7-5.7 5.7 5.7 88 88 5.7 5.7L344 203.3l-5.7-5.7L264 123.3 264 296z" />
    </Icon>
);

export default MessageArrowUp;