
import { Icon, generic } from "../../index";

/**
 * A component that renders the `transgender` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transgender?s=sharp-duotone-solid transgender}
 * @preview ![transgender](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/transgender.svg)
 */
const Transgender: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 256a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M0 112L0 0 112 0l16 16L89 55l23 23 7-7 17-17L169.9 88l-17 17-7 7 15.2 15.2C187.7 107.6 220.5 96 256 96s68.3 11.6 94.9 31.2L423 55 384 16 400 0 512 0l0 112-16 16L457 89l-72.1 72.1C404.4 187.7 416 220.5 416 256c0 80.2-59 146.6-136 158.2l0 17.8 16 0 24 0 0 48-24 0-16 0 0 8 0 24-48 0 0-24 0-8-16 0-24 0 0-48 24 0 16 0 0-17.8C155 402.6 96 336.2 96 256c0-35.5 11.6-68.3 31.2-94.9L112 145.9l-7 7-17 17L54.1 136l17-17 7-7L55 89 16 128 0 112zM352 256a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z" />
    </Icon>
);

export default Transgender;