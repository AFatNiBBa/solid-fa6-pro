
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-v` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-v?s=duotone circle-v}
 * @preview ![circle-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-v.svg)
 */
const CircleV: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm130.5-77.3c-5.9-11.9-1.1-26.3 10.7-32.2s26.3-1.1 32.2 10.7c27.5 55 55 110 82.5 165.1c27.5-55 55-110 82.5-165.1c5.9-11.9 20.3-16.7 32.2-10.7c8.4 4.2 13.3 12.7 13.3 21.5c0 3.6-.8 7.3-2.5 10.7c-34.7 69.3-69.3 138.7-104 208c-4.1 8.1-12.4 13.3-21.5 13.3s-17.4-5.1-21.5-13.3c-34.7-69.3-69.3-138.7-104-208z" />
        <path d="M141.3 146.5c11.9-5.9 26.3-1.1 32.2 10.7L256 322.3l82.5-165.1c5.9-11.9 20.3-16.7 32.2-10.7s16.7 20.3 10.7 32.2l-104 208c-4.1 8.1-12.4 13.3-21.5 13.3s-17.4-5.1-21.5-13.3l-104-208c-5.9-11.9-1.1-26.3 10.7-32.2z" />
    </Icon>
);

export default CircleV;