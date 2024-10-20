
import { Icon } from "../../index";

/**
 * A component that renders the `message` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message?s=sharp-regular message}
 * @preview ![message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/message.svg)
 */
const Message: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 480l-48 32 0-48 0-9.7 0-38.3-48 0-64 0L0 416l0-48L0 48 0 0 48 0 464 0l48 0 0 48 0 320 0 48-48 0-160 0-96 64zm0-57.7l69.4-46.2 12.1-8.1 14.5 0 160 0 0-320L48 48l0 320 112 0 48 0 0 48 0 6.3z" />
    </Icon>
);

export default Message;