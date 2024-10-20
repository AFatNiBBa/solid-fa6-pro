
import { Icon } from "../../index";

/**
 * A component that renders the `rocket-launch` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rocket-launch?s=solid rocket-launch}
 * @preview ![rocket-launch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/rocket-launch.svg)
 */
const RocketLaunch: typeof Icon = x => (
    <Icon {...x}>
        <path d="M117.8 128l89.3 0C286.9-3.7 409.5-8.5 483.9 5.3c11.6 2.2 20.7 11.2 22.8 22.8c13.8 74.4 9 197-122.7 276.9l0 89.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-114.7c0-22.6-9-44.3-25-60.3s-37.7-25-60.3-25L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3zM424 128a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zM166.5 470C132.3 504.3 66 511 28.3 511.9c-16 .4-28.6-12.2-28.2-28.2C1 446 7.7 379.7 42 345.5c34.4-34.4 90.1-34.4 124.5 0s34.4 90.1 0 124.5zm-46.7-36.4c11.4-11.4 11.4-30 0-41.4s-30-11.4-41.4 0c-10.1 10.1-13 28.5-13.7 41.3c-.5 8 5.9 14.3 13.9 13.9c12.8-.7 31.2-3.7 41.3-13.7z" />
    </Icon>
);

export default RocketLaunch;