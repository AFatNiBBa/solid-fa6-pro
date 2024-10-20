
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blinds` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds?s=sharp-duotone-solid blinds}
 * @preview ![blinds](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/blinds.svg)
 */
const Blinds: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128l128 0 0-64L32 64 16 64 0 128zM0 256l98.7 0c4.8-13.6 15.6-24.4 29.3-29.3l0-66.7L24 160 0 256zM0 384l512 0-24-96-298.7 0c-6.6 18.6-24.4 32-45.3 32c-.7 0-1.3 0-1.9 0s-1.3-.1-1.9-.1c-1.3-.1-2.5-.3-3.8-.5c-2.5-.4-4.9-1-7.3-1.8c-4.7-1.5-9.1-3.8-13-6.6c-7.9-5.7-14-13.7-17.3-23L24 288 0 384zM0 512l512 0-24-96L24 416 0 512zM160 64l0 64 352 0L496 64l-16 0L160 64zm0 96l0 66.7c.9 .3 1.7 .6 2.5 1s1.6 .7 2.5 1.1c1.6 .8 3.2 1.7 4.7 2.6c3 1.9 5.8 4.1 8.3 6.6c5 5 8.9 11.1 11.3 17.9L512 256l-24-96-328 0z" />
        <path d="M32 0L0 0 0 64l32 0 96 0 0 162.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L160 64l320 0 32 0 0-64L480 0 32 0z" />
    </Icon>
);

export default Blinds;