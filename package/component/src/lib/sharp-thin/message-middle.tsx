
import { Icon } from "../../index";

/**
 * A component that renders the `message-middle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle?s=sharp-thin message-middle}
 * @preview ![message-middle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/message-middle.svg)
 */
const MessageMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M173.7 416L16 416 0 416l0-16L0 16 0 0 16 0 496 0l16 0 0 16 0 384 0 16-16 0-157.7 0-71.7 83.7L256 512l-10.5-12.3L173.7 416zM256 487.4l70.1-81.8 4.8-5.6 7.4 0L496 400l0-384L16 16l0 384 157.7 0 7.4 0 4.8 5.6L256 487.4z" />
    </Icon>
);

export default MessageMiddle;