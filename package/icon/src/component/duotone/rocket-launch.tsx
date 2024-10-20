
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rocket-launch` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rocket-launch?s=duotone rocket-launch}
 * @preview ![rocket-launch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rocket-launch.svg)
 */
const RocketLaunch: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.1 483.7c-.4 16 12.2 28.6 28.2 28.2C66 511 132.3 504.3 166.5 470c34.4-34.4 34.4-90.1 0-124.5s-90.1-34.4-124.5 0C7.7 379.7 1 446 .1 483.7zm3-207.9C7.3 283.3 15.3 288 24 288l94.5 0c19.5-43.5 51.6-112.1 80.1-158l-80.8 0c-25.2 0-48.5 13.1-61.5 34.6L3.5 251.5c-4.5 7.4-4.7 16.7-.4 24.2zM64.6 433.5c.7-12.8 3.7-31.2 13.7-41.3c11.4-11.4 30-11.4 41.4 0s11.4 30 0 41.4c-10.1 10.1-28.5 13-41.3 13.7c-8 .5-14.3-5.9-13.9-13.9zm159.1-41.6c.2 32 .2 64 .2 96.1c0 8.7 4.7 16.7 12.2 20.9c3.7 2.1 7.7 3.1 11.8 3.1c4.3 0 8.6-1.2 12.5-3.5l86.9-52.8c21.5-13.1 34.6-36.4 34.6-61.5l0-80.8c-45.6 28.2-114 59.4-158.2 78.5z" />
        <path d="M223.7 391.9c-4-56-49.1-100.6-105.3-103.8c21.4-47.9 58.4-126.6 88.8-171.5C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-44.7 30.3-123.1 66.2-171.6 87.2zM424 128a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z" />
    </Icon>
);

export default RocketLaunch;