
import { Icon } from "../../index";

/**
 * A component that renders the `bed-pulse` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-pulse?s=regular bed-pulse}
 * @preview ![bed-pulse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bed-pulse.svg)
 */
const BedPulse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M483.2 9.6L524 64l92 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-104 0c-7.6 0-14.7-3.6-19.2-9.6L468.7 70.3l-47 99.9c-3.7 7.8-11.3 13.1-19.9 13.7s-16.9-3.4-21.7-10.6L339.2 112 216 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l136 0c8 0 15.5 4 20 10.7l24.4 36.6 45.9-97.5C445.9 6.2 453.2 1 461.6 .1s16.6 2.7 21.6 9.5zM288 216c0-27.3 19.5-50 45.4-55l20 30.1c4.7 7 10.8 12.7 17.8 16.9L344 208c-4.4 0-8 3.6-8 8l0 152 256 0 0-88c0-39.8-32.2-72-72-72l-91.2 0c9.3-5.6 17-13.9 21.8-24.2L461.9 160l58.1 0c66.3 0 120 53.7 120 120l0 112 0 96c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72-280 0L48 416l0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96L0 88C0 74.7 10.7 64 24 64s24 10.7 24 24l0 280 240 0 0-152zm-80 32a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zM80 248a88 88 0 1 1 176 0A88 88 0 1 1 80 248z" />
    </Icon>
);

export default BedPulse;