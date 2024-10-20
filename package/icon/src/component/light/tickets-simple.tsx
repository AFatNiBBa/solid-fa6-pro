
import { Icon } from "../../index";

/**
 * A component that renders the `tickets-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-simple?s=light tickets-simple}
 * @preview ![tickets-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/tickets-simple.svg)
 */
const TicketsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 96c0-17.7 14.3-32 32-32l416 0c17.7 0 32 14.3 32 32l0 47.5c-23.7 11.8-40 36.2-40 64.5s16.3 52.8 40 64.5l0 47.5c0 17.7-14.3 32-32 32l-416 0c-17.7 0-32-14.3-32-32l0-47.5c23.7-11.8 40-36.2 40-64.5s-16.3-52.8-40-64.5L128 96zm484.1 45.6l.1 0c0 0 0 0 0 0l-.1 0zm.1 132.9l-.1 0c0 0 .1 0 .1 0zm-488.4 0l.1 0c-.1 0-.1 0-.1 0zm0-132.9l.1 0c-.1 0-.1 0-.1 0zM96 96l0 56c0 8.8 7.4 15.7 15.6 19.1c14.4 6.1 24.4 20.3 24.4 36.9s-10.1 30.8-24.4 36.9C103.4 248.3 96 255.2 96 264l0 56c0 35.3 28.7 64 64 64l416 0c35.3 0 64-28.7 64-64l0-56c0-8.8-7.4-15.7-15.6-19.1C610.1 238.8 600 224.6 600 208s10.1-30.8 24.4-36.9c8.1-3.4 15.6-10.3 15.6-19.1l0-56c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16L0 368c0 61.9 50.1 112 112 112l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-416 0c-44.2 0-80-35.8-80-80l0-256z" />
    </Icon>
);

export default TicketsSimple;