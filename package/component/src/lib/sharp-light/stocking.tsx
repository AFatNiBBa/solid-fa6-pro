
import { Icon } from "../../index";

/**
 * A component that renders the `stocking` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stocking?s=sharp-light stocking}
 * @preview ![stocking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/stocking.svg)
 */
const Stocking: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96 32l0 48 256 0 0-48L96 32zM64 0L96 0 352 0l32 0 0 32 0 48 0 32-32 0L96 112l-32 0 0-32 0-48L64 0zm64 273.1l-14.2 9.5L73.4 309.5C47.6 326.8 32 355.8 32 386.9l0 2.2c0 50.2 40.7 90.8 90.8 90.8c17.9 0 35.5-5.3 50.4-15.3L320 366.9 320 144l32 0 0 240L190.9 491.4c-20.2 13.4-43.9 20.6-68.1 20.6C55 512 0 457 0 389.2l0-2.2c0-41.8 20.9-80.9 55.7-104.1L96 256l0-112 32 0 0 112 0 17.1z" />
    </Icon>
);

export default Stocking;