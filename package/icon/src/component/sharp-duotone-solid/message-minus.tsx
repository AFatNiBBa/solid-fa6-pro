
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-minus?s=sharp-duotone-solid message-minus}
 * @preview ![message-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message-minus.svg)
 */
const MessageMinus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM160 184l0 48 24 0 144 0 24 0 0-48-24 0-144 0-24 0z" />
        <path d="M160 184l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48z" />
    </Icon>
);

export default MessageMinus;