
import { Icon } from "../../index";

/**
 * A component that renders the `message-bot` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-bot?s=regular message-bot}
 * @preview ![message-bot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/message-bot.svg)
 */
const MessageBot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M272 368l-48 0-64 0c-8.8 0-16-7.2-16-16l0-160 0-128c0-8.8 7.2-16 16-16l320 0c8.8 0 16 7.2 16 16l0 128 0 160c0 8.8-7.2 16-16 16l-106.7 0-16 0-12.8 9.6L272 432l0-16 0-48zM96 208l0 144c0 35.3 28.7 64 64 64l16 0 48 0 0 48 0 4 0 .3 0 6.4 0 21.3c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L266.7 496l5.1-3.8 .2-.2 101.3-76L480 416c35.3 0 64-28.7 64-64l0-144 36.3 0c5.5 9.6 15.9 16 27.7 16c17.7 0 32-14.3 32-32s-14.3-32-32-32c-11.8 0-22.2 6.4-27.7 16L544 176l0-112c0-35.3-28.7-64-64-64L160 0C124.7 0 96 28.7 96 64l0 112-36.3 0c-5.5-9.6-15.9-16-27.7-16c-17.7 0-32 14.3-32 32s14.3 32 32 32c11.8 0 22.2-6.4 27.7-16L96 208zm80-80l0 128c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L208 96c-17.7 0-32 14.3-32 32zm32 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default MessageBot;