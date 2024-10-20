
import { Icon } from "../../index";

/**
 * A component that renders the `message-captions` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-captions?s=sharp-solid message-captions}
 * @preview ![message-captions](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/message-captions.svg)
 */
const MessageCaptions: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM120 192l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0zm224 0l-24 0 0 48 24 0 48 0 24 0 0-48-24 0-48 0zM120 272l-24 0 0 48 24 0 48 0 24 0 0-48-24 0-48 0zm128 0l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default MessageCaptions;