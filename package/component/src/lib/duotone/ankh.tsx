
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ankh` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ankh?s=duotone ankh}
 * @preview ![ankh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ankh.svg)
 */
const Ankh: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M128 320l19.4 0 25.1 0 19.4 0 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160z" />
        <path d="M160 64c-35.3 0-64 28.7-64 64c0 41.6 20.7 76.6 46.6 104.1c5.9 6.2 11.8 11.8 17.4 16.7c5.6-4.9 11.5-10.5 17.4-16.7C203.3 204.6 224 169.6 224 128c0-35.3-28.7-64-64-64zM32 128C32 57.3 89.3 0 160 0s128 57.3 128 128c0 52.4-21.5 95.5-46.8 128l46.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-115.4 0-25.1 0L32 320c-17.7 0-32-14.3-32-32s14.3-32 32-32l46.8 0C53.5 223.5 32 180.4 32 128z" />
    </Icon>
);

export default Ankh;