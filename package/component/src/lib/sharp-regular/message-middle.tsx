
import { Icon } from "../../index";

/**
 * A component that renders the `message-middle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle?s=sharp-regular message-middle}
 * @preview ![message-middle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/message-middle.svg)
 */
const MessageMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M173.7 416L48 416 0 416l0-48L0 48 0 0 48 0 464 0l48 0 0 48 0 320 0 48-48 0-125.7 0-50.7 59.1L256 512l-31.6-36.9L173.7 416zM464 368l0-320L48 48l0 320 125.7 0 22.1 0 14.4 16.8L256 438.2l45.8-53.5L316.2 368l22.1 0L464 368z" />
    </Icon>
);

export default MessageMiddle;