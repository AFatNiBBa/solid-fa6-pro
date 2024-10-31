
import { Icon } from "../../index";

/**
 * A component that renders the `message-bot` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-bot?s=sharp-light message-bot}
 * @preview ![message-bot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-bot.svg)
 */
const MessageBot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 416l32 0 0 32 0 25.5 0 38.5 32-21.3L368 416l144 0 32 0 0-32 0-176 32 0 0 16 64 0 0-64-64 0 0 16-32 0 0-144 0-32L512 0 128 0 96 0l0 32 0 144-32 0 0-16L0 160l0 64 64 0 0-16 32 0 0 176 0 32 32 0 64 0zM512 32l0 160 0 192-144 0-9.7 0-8.1 5.4L256 452.2l0-36.2 0-32-32 0-96 0 0-192 0-160 384 0zM192 128l256 0 0 128-256 0 0-128zM160 96l0 32 0 128 0 32 32 0 256 0 32 0 0-32 0-128 0-32-32 0L192 96l-32 0zm120 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm112 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default MessageBot;