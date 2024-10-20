
import { Icon } from "../../index";

/**
 * A component that renders the `message-smile` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-smile?s=sharp-solid message-smile}
 * @preview ![message-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/message-smile.svg)
 */
const MessageSmile: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM192 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM168.4 222.1l-35.8 32 16 17.9c26.3 29.4 64.7 48 107.3 48s81-18.6 107.3-48l16-17.9-35.8-32-16 17.9c-17.6 19.7-43.1 32-71.6 32s-53.9-12.3-71.6-32l-16-17.9z" />
    </Icon>
);

export default MessageSmile;