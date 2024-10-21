
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-sterling` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sterling?s=sharp-duotone-solid circle-sterling}
 * @preview ![circle-sterling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-sterling.svg)
 */
const CircleSterling: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM144.7 368l18-35c7.1-13.8 14.2-27.6 21.3-41.4l-.1-19.6L160 272c0-16 0-32 0-48l23.5 0-.2-33.1c0-1.4 0-2.7 .1-4s.2-2.7 .3-4c.3-2.6 .6-5.3 1.1-7.8c1-5.1 2.5-10.1 4.5-14.8c3.9-9.4 9.7-17.9 16.7-25.1c14.2-14.3 33.8-23.1 55.6-23.1c10 0 19.8 1.9 29.1 5.6l30.3 12.1 22.3 8.9-17.8 44.6c-7.4-3-14.9-5.9-22.3-8.9c-10.1-4-20.2-8.1-30.3-12.1c-3.6-1.4-7.4-2.2-11.3-2.2c-8.4 0-16 3.4-21.5 9c-2.7 2.8-5 6.1-6.5 9.7c-.8 1.8-1.3 3.7-1.7 5.7c-.2 1-.3 2-.4 3c0 .5-.1 1-.1 1.6c0 .5 0 1 0 1.6c.1 11.2 .2 22.3 .2 33.5l32.5 0 24 0c0 16 0 32 0 48l-24 0-32.2 0c.1 8.4 .1 16.8 .2 25.2l0 5.9c-.9 1.7-1.8 3.5-2.7 5.3c-2 3.9-4 7.8-6 11.6L328 320l24 0 0 48-24 0-144 0-39.3 0z" />
        <path d="M231.2 190.5c-.1-16.8 13.5-30.5 30.3-30.5c3.9 0 7.7 .7 11.3 2.2l30.3 12.1 22.3 8.9 17.8-44.6-22.3-8.9-30.3-12.1c-9.2-3.7-19.1-5.6-29.1-5.6c-43.5 0-78.6 35.4-78.3 78.9l.2 33.1L160 224l0 48 23.8 0 .1 19.6L162.7 333l-18 35 39.3 0 144 0 24 0 0-48-24 0-104.7 0 6-11.6 2.7-5.3 0-5.9-.2-25.2 32.2 0 24 0 0-48-24 0-32.5 0-.2-33.5z" />
    </Icon>
);

export default CircleSterling;