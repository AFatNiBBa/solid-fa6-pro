
import { Icon } from "../../index";

/**
 * A component that renders the `message-bot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-bot?s=sharp-solid message-bot}
 * @preview ![message-bot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/message-bot.svg)
 */
const MessageBot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M544 0L96 0l0 176-32 0 0-16L0 160l0 64 64 0 0-16 32 0 0 208 128 0 0 96 144-96 176 0 0-208 32 0 0 16 64 0 0-64-64 0 0 16-32 0L544 0zM160 96l320 0 0 192-320 0 0-192zm64 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm224-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default MessageBot;