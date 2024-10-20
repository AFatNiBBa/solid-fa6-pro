
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paintbrush-pencil` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paintbrush-pencil?s=duotone paintbrush-pencil}
 * @preview ![paintbrush-pencil](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/paintbrush-pencil.svg)
 */
const PaintbrushPencil: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M50.7 42.7c-25 25-25 65.5 0 90.5L173.5 256c.8 0 1.7 0 2.5 0c6.2 0 12.4 .4 18.4 1.2L298.5 153.1 164.7 19.3c-25-25-65.5-25-90.5 0L50.7 42.7zM318.8 381.6c.8 6 1.2 12.2 1.2 18.4c0 .8 0 1.7 0 2.5l64.6 64.6c6.7 6.7 15.1 11.6 24.2 14.2l104 29.7c2.2 .6 4.4 .9 6.6 .9c6.3 0 12.4-2.5 17-7s7-10.7 7-17c0-2.2-.3-4.4-.9-6.6l-29.7-104c-2.6-9.2-7.5-17.5-14.2-24.2l-75.6-75.6L318.8 381.6z" />
        <path d="M559.6 16.4c21.9 21.9 21.9 57.3 0 79.2L306.9 348.3l-79.2-79.2L480.4 16.4c21.9-21.9 57.3-21.9 79.2 0zM205.1 291.7l79.2 79.2-.1 .1c2.5 9.3 3.8 19 3.8 29c0 61.9-50.1 112-112 112L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l4.8 0c17.6 0 29.6-18.9 27.8-36.4c-.4-3.8-.6-7.7-.6-11.6c0-61.9 50.1-112 112-112c10 0 19.8 1.3 29 3.8l.1-.1z" />
    </Icon>
);

export default PaintbrushPencil;