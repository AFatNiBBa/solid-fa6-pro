
import { Icon } from "../../index";

/**
 * A component that renders the `message-lines` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-lines?s=sharp-thin message-lines}
 * @preview ![message-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/message-lines.svg)
 */
const MessageLines: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-16 0L16 416 0 416l0-16L0 16 0 0 16 0 496 0l16 0 0 16 0 384 0 16-16 0-192 0L176 501.3 160 512l0-19.2 0-60.8 0-16zm0-16l16 0 0 16 0 66.1 119.1-79.4 4-2.7 4.8 0 192 0 0-384L16 16l0 384 144 0zM136 152l240 0 8 0 0 16-8 0-240 0-8 0 0-16 8 0zm0 96l144 0 8 0 0 16-8 0-144 0-8 0 0-16 8 0z" />
    </Icon>
);

export default MessageLines;