
import { Icon } from "../../index";

/**
 * A component that renders the `tickets-simple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-simple?s=thin tickets-simple}
 * @preview ![tickets-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tickets-simple.svg)
 */
const TicketsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 96c0-26.5 21.5-48 48-48l416 0c26.5 0 48 21.5 48 48l0 49.9c-.3 .1-.6 .3-.9 .4C596 153.6 576 178.5 576 208s20 54.4 47.1 61.8c.3 .1 .6 .2 .9 .4l0 49.9c0 26.5-21.5 48-48 48l-416 0c-26.5 0-48-21.5-48-48l0-49.9c.3-.1 .6-.3 .9-.4C140 262.4 160 237.5 160 208s-20-54.4-47.1-61.8c-.3-.1-.6-.2-.9-.4L112 96zM96 96l0 51.2c0 7.1 5.8 12.6 12.7 14.5C129 167.2 144 185.9 144 208s-15 40.8-35.3 46.3c-6.8 1.9-12.7 7.4-12.7 14.5L96 320c0 35.3 28.7 64 64 64l416 0c35.3 0 64-28.7 64-64l0-51.2c0-7.1-5.8-12.6-12.7-14.5C607 248.8 592 230.1 592 208s15-40.8 35.3-46.3c6.8-1.9 12.7-7.4 12.7-14.5L640 96c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zM16 96c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 376c0 57.4 46.6 104 104 104l448 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-448 0c-48.6 0-88-39.4-88-88L16 96z" />
    </Icon>
);

export default TicketsSimple;