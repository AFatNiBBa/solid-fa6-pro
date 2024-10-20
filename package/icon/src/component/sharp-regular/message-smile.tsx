
import { Icon } from "../../index";

/**
 * A component that renders the `message-smile` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-smile?s=sharp-regular message-smile}
 * @preview ![message-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/message-smile.svg)
 */
const MessageSmile: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 512l48-32 96-64 160 0 48 0 0-48 0-320 0-48L464 0 48 0 0 0 0 48 0 368l0 48 48 0 64 0 48 0 0 38.3 0 9.7 0 48zM277.4 376.1L208 422.3l0-6.3 0-48-48 0L48 368 48 48l416 0 0 320-160 0-14.5 0-12.1 8.1zM192 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM168.4 222.1l-35.8 32 16 17.9c26.3 29.4 64.7 48 107.3 48s81-18.6 107.3-48l16-17.9-35.8-32-16 17.9c-17.6 19.7-43.1 32-71.6 32s-53.9-12.3-71.6-32l-16-17.9z" />
    </Icon>
);

export default MessageSmile;