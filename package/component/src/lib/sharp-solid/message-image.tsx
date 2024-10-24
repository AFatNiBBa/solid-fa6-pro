
import { Icon } from "../../index";

/**
 * A component that renders the `message-image` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-image?s=sharp-solid message-image}
 * @preview ![message-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/message-image.svg)
 */
const MessageImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM176 128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm120-16l-19.6 27.8L219.1 221l-17.1-19.3L184 181.5l-17.9 20.2-64 72L96 280.5l0 9.1 0 8 0 24 24 0 56 0 24 0 48 0 24 0 120 0 24 0 0-24 0-8 0-7.6-4.4-6.2-96-136L296 112z" />
    </Icon>
);

export default MessageImage;