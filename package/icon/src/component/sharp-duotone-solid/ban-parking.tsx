
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ban-parking` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban-parking?s=sharp-duotone-solid ban-parking}
 * @preview ![ban-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ban-parking.svg)
 */
const BanParking: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M168 261.3l0 26.7 0 64 0 32 64 0 0-32 0-26.7-64-64zM173.3 128l64 64 42.7 0c17.7 0 32 14.3 32 32c0 11.6-6.2 21.7-15.4 27.4L342.3 297c20.6-17.6 33.7-43.8 33.7-73c0-53-43-96-96-96l-80 0-26.7 0z" />
        <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default BanParking;