
import { Icon, generic } from "../../index";

/**
 * A component that renders the `registered` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/registered?s=sharp-duotone-solid registered}
 * @preview ![registered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/registered.svg)
 */
const Registered: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l24 0 104 0c44.2 0 80 35.8 80 80c0 37.8-26.3 69.5-61.6 77.9L369.1 384l-57 0-61.3-96L208 288l0 72 0 24-48 0 0-24 0-96 0-112 0-24zm48 48l0 64 56 0 24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0z" />
        <path d="M184 128l-24 0 0 24 0 112 0 96 0 24 48 0 0-24 0-72 42.9 0 61.3 96 57 0-62.7-98.1c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80l-104 0zm80 112l-56 0 0-64 80 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-24 0z" />
    </Icon>
);

export default Registered;