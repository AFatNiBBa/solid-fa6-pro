
import { Icon } from "../../index";

/**
 * A component that renders the `rocket-launch` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rocket-launch?s=sharp-solid rocket-launch}
 * @preview ![rocket-launch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/rocket-launch.svg)
 */
const RocketLaunch: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 305l0 127L224 512l0-142c0-21.8-8.6-42.6-24-58c-15.3-15.3-36.1-24-57.9-24L0 287.6 80 128l127 0C294.1-15.5 431.8-8.4 502.7 9.3C520.4 80.2 527.5 217.9 384 305zm40-177a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zM166.5 470C117 519.5 .5 511.5 .5 511.5s-8-116.5 41.5-166c34.4-34.4 90.1-34.4 124.5 0s34.4 90.1 0 124.5zm-46.7-36.4c11.4-11.4 11.4-30 0-41.4s-30-11.4-41.4 0c-16.5 16.5-13.8 55.2-13.8 55.2s38.7 2.7 55.2-13.8z" />
    </Icon>
);

export default RocketLaunch;