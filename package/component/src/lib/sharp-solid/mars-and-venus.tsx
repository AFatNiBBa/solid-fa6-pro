
import { Icon } from "../../index";

/**
 * A component that renders the `mars-and-venus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-and-venus?s=sharp-solid mars-and-venus}
 * @preview ![mars-and-venus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mars-and-venus.svg)
 */
const MarsAndVenus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 0L496 0l0 128-32 32-47-47-25.6 25.6C407 163.3 416 192.6 416 224c0 80.2-59 146.6-136 158.2l0 1.8 0 24 24 0 24 0 0 48-24 0-24 0 0 32 0 24-48 0 0-24 0-32-24 0-24 0 0-48 24 0 24 0 0-24 0-1.8C155 370.6 96 304.2 96 224c0-88.4 71.6-160 160-160c39.6 0 75.9 14.4 103.8 38.2L383 79 336 32 368 0zM352 224a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z" />
    </Icon>
);

export default MarsAndVenus;