
import { Icon } from "../../index";

/**
 * A component that renders the `bell-school` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-school?s=regular bell-school}
 * @preview ![bell-school](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bell-school.svg)
 */
const BellSchool: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 48a160 160 0 1 1 0 320 160 160 0 1 1 0-320zM352 358.1c39.4-37.9 64-91.1 64-150.1C416 93.1 322.9 0 208 0S0 93.1 0 208c0 59 24.6 112.2 64 150.1L64 448c0 35.3 28.7 64 64 64l144 0 16 0 128 0c39.2 0 71.1-31.4 72-70.4c14.4-8.3 24-23.8 24-41.6c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 17.7 9.6 33.2 24 41.5c-.8 12.5-11.2 22.5-24 22.5l-66 0c1.3-5.1 2-10.5 2-16l0-89.9zM288 464l-16 0-144 0c-8.8 0-16-7.2-16-16l0-55.4c28.7 15 61.4 23.4 96 23.4s67.3-8.5 96-23.4l0 55.4c0 8.8-7.2 16-16 16zM208 160a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
    </Icon>
);

export default BellSchool;