
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter?s=light circle-quarter}
 * @preview ![circle-quarter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-quarter.svg)
 */
const CircleQuarter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 34.3L224 224 34.3 224C48.3 125.9 125.9 48.3 224 34.3zM2 224.1C-.2 241.6 14.3 256 32 256l192 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.4-32.2-31.9-30C108.2 16.4 16.4 108.2 2 224.1z" />
    </Icon>
);

export default CircleQuarter;