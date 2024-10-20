
import { Icon } from "../../index";

/**
 * A component that renders the `message-bot` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-bot?s=light message-bot}
 * @preview ![message-bot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/message-bot.svg)
 */
const MessageBot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 384c17.7 0 32 14.3 32 32l0 48 98.1-73.6c5.5-4.2 12.3-6.4 19.2-6.4L480 384c17.7 0 32-14.3 32-32l0-160 0-128c0-17.7-14.3-32-32-32L160 32c-17.7 0-32 14.3-32 32l0 128 0 160c0 17.7 14.3 32 32 32l64 0zM544 64l0 112 36.3 0c5.5-9.6 15.9-16 27.7-16c17.7 0 32 14.3 32 32s-14.3 32-32 32c-11.8 0-22.2-6.4-27.7-16L544 208l0 144c0 35.3-28.7 64-64 64l-106.7 0L249.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-48 0-32-32 0-32 0c-35.3 0-64-28.7-64-64l0-144-36.3 0c-5.5 9.6-15.9 16-27.7 16c-17.7 0-32-14.3-32-32s14.3-32 32-32c11.8 0 22.2 6.4 27.7 16L96 176 96 64c0-35.3 28.7-64 64-64L480 0c35.3 0 64 28.7 64 64zM208 128c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16l-224 0zm-48 16c0-26.5 21.5-48 48-48l224 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-224 0c-26.5 0-48-21.5-48-48l0-96zm56 48a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm176-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default MessageBot;