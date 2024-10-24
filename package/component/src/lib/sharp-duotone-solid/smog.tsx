
import { Icon, generic } from "../../index";

/**
 * A component that renders the `smog` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/smog?s=sharp-duotone-solid smog}
 * @preview ![smog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/smog.svg)
 */
const Smog: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 464l0 48 24 0 336 0 24 0 0-48-24 0L24 464 0 464zm72-96l0 48 24 0 104 0 24 0 0-48-24 0L96 368l-24 0zm184 0l0 48 24 0 336 0 24 0 0-48-24 0-336 0-24 0zm160 96l0 48 24 0 112 0 24 0 0-48-24 0-112 0-24 0z" />
        <path d="M176 288c5.4 0 10.7-.3 16-.9l0 .9 107.3 0c22.6 19.9 52.2 32 84.7 32s62.1-12.1 84.7-32l27.3 0 112 0 0-112c0-61.9-50.1-112-112-112c-10.7 0-21 1.5-30.8 4.3C443.8 27.7 401.1 0 352 0c-32.6 0-62.4 12.2-85.1 32.3C242.1 12.1 210.5 0 176 0C96.5 0 32 64.5 32 144l0 144 144 0z" />
    </Icon>
);

export default Smog;