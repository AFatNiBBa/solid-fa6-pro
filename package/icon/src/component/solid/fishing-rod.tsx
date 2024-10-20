
import { Icon } from "../../index";

/**
 * A component that renders the `fishing-rod` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fishing-rod?s=solid fishing-rod}
 * @preview ![fishing-rod](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/fishing-rod.svg)
 */
const FishingRod: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M295.9 48c-3 0-6 .4-8.8 1.2L209.8 71.3C137.7 91.9 88 157.8 88 232.8L88 288l8 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 320c0-17.7 14.3-32 32-32l8 0 0-55.2c0-96.4 63.9-181.2 156.7-207.7L273.8 3.1C281 1 288.4 0 295.9 0C340.1 0 376 35.9 376 80.1l0 55.9c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-55.9C328 62.4 313.6 48 295.9 48zM256 344c0-71.6 55.6-127.8 89-148.1c4.3-2.6 9.6-2.6 14 0c33.5 20.3 89 76.6 89 148.1c0 32-16 80-64 112l27.3 27.3c3 3 4.7 7.1 4.7 11.3l0 1.4c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-1.4c0-4.2 1.7-8.3 4.7-11.3L320 456c-48-32-64-80-64-112zm128-32a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default FishingRod;