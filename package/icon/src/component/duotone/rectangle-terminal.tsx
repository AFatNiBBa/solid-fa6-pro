
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-terminal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-terminal?s=duotone rectangle-terminal}
 * @preview ![rectangle-terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rectangle-terminal.svg)
 */
const RectangleTerminal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm96.4 67.7c-.1 .7-.2 1.4-.3 2.2s-.1 1.4-.1 2.1c0 1.7 .2 3.3 .5 4.9s.8 3.2 1.5 4.7c1.3 3 3.2 5.8 5.8 8.2L180.5 256l-76.7 70.3c-2.6 2.4-4.5 5.2-5.8 8.2c-.7 1.5-1.1 3.1-1.5 4.7s-.5 3.2-.5 4.8c0 .8 0 1.5 .1 2.2s.2 1.4 .3 2.2c.3 1.4 .7 2.8 1.2 4.2c1 2.8 2.6 5.4 4.7 7.7c9 9.8 24.1 10.4 33.9 1.5c32-29.3 64-58.7 96-88c5-4.5 7.8-11 7.8-17.7s-2.8-13.1-7.8-17.7c-32-29.3-64-58.7-96-88c-4.6-4.2-10.4-6.3-16.2-6.3c-6.5 0-13 2.6-17.7 7.8c-2.1 2.3-3.7 4.9-4.7 7.7c-.5 1.4-.9 2.8-1.2 4.2zM224 360c0 13.3 10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0c-13.3 0-24 10.7-24 24z" />
        <path d="M103.8 185.7c-9.8-9-10.4-24.1-1.5-33.9s24.1-10.4 33.9-1.5l96 88c5 4.5 7.8 11 7.8 17.7s-2.8 13.1-7.8 17.7l-96 88c-9.8 9-25 8.3-33.9-1.5s-8.3-25 1.5-33.9L180.5 256l-76.7-70.3zM248 336l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default RectangleTerminal;