
import { Icon } from "../../index";

/**
 * A component that renders the `mountain-sun` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain-sun?s=solid mountain-sun}
 * @preview ![mountain-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/mountain-sun.svg)
 */
const MountainSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M560 160A80 80 0 1 0 560 0a80 80 0 1 0 0 160zM55.9 512l325.2 0 75 0 122.8 0c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 196.1 487.8 192 480 192s-15 4.1-19.1 10.7l-48.2 79L286.8 81c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 426.4C3 435.3 0 445.6 0 456.1C0 487 25 512 55.9 512z" />
    </Icon>
);

export default MountainSun;