
import { Icon } from "../../index";

/**
 * A component that renders the `message-bot` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-bot?s=sharp-regular message-bot}
 * @preview ![message-bot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/message-bot.svg)
 */
const MessageBot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M272 480l-48 32 0-48 0-9.7 0-38.3-48 0-32 0-48 0 0-48 0-160-32 0 0 16L0 224l0-64 64 0 0 16 32 0L96 48 96 0l48 0L496 0l48 0 0 48 0 128 32 0 0-16 64 0 0 64-64 0 0-16-32 0 0 160 0 48-48 0-128 0-96 64zM144 368l80 0 48 0 0 48 0 6.3 69.4-46.2 12.1-8.1 14.5 0 128 0 0-176 0-144L144 48l0 144 0 176zM464 96l0 192-288 0 0-192 288 0zM240 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default MessageBot;