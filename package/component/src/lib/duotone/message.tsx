
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message?s=duotone message}
 * @preview ![message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/message.svg)
 */
const Message: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z" />
    </Icon>
);

export default Message;