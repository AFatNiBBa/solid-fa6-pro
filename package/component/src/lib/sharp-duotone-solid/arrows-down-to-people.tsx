
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-down-to-people` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-down-to-people?s=sharp-duotone-solid arrows-down-to-people}
 * @preview ![arrows-down-to-people](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-down-to-people.svg)
 */
const ArrowsDownToPeople: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M7.4 486.1l42 23.3 11.7-21 27-48.6L88 512l112 0 0-72.2 27 48.6 11.7 21 42-23.3-11.7-21-35.2-63.4 3.4-6.3L264 345.5l0 86.5 112 0 0-86.5 26.9 49.9 3.4 6.3L371 465.1l-11.7 21 42 23.3 11.7-21 27-48.6 0 72.2 112 0 0-72.2 27 48.6 11.7 21 42-23.3-11.7-21L565 364.3 558.1 352 544 352l-96 0-14 0-44.9-83.4L382.3 256 368 256l-96 0-14.3 0-6.8 12.6L206 352l-14 0-96 0-14.1 0L75 364.3 19 465.1l-11.7 21zM104 296a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm176-96a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm176 96a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
        <path d="M120 0l0 24 0 118.1L97 119l-17-17L46.1 136l17 17 64 64 17 17 17-17 64-64 17-17L208 102.1l-17 17-23 23L168 24l0-24L120 0zM415 153l64 64 17 17 17-17 64-64 17-17L560 102.1l-17 17-23 23L520 24l0-24L472 0l0 24 0 118.1-23-23-17-17L398.1 136l17 17z" />
    </Icon>
);

export default ArrowsDownToPeople;