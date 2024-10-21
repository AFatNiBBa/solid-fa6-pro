
import { Icon } from "../../index";

/**
 * A component that renders the `message-text` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-text?s=sharp-light message-text}
 * @preview ![message-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-text.svg)
 */
const MessageText: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-32 0-96 0L0 416l0-32L0 32 0 0 32 0 480 0l32 0 0 32 0 352 0 32-32 0-176 0L192 490.7 160 512l0-38.5 0-25.5 0-32zm0-32l32 0 0 32 0 36.2 94.2-62.8 8.1-5.4 9.7 0 176 0 0-352L32 32l0 352 128 0zm32-256l64 0 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default MessageText;