
import { Icon } from "../../index";

/**
 * A component that renders the `message-exclamation` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-exclamation?s=sharp-regular message-exclamation}
 * @preview ![message-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/message-exclamation.svg)
 */
const MessageExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 512l48-32 96-64 160 0 48 0 0-48 0-320 0-48L464 0 48 0 0 0 0 48 0 368l0 48 48 0 64 0 48 0 0 38.3 0 9.7 0 48zM277.4 376.1L208 422.3l0-6.3 0-48-48 0L48 368 48 48l416 0 0 320-160 0-14.5 0-12.1 8.1zM280 80l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zM232 272l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default MessageExclamation;