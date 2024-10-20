
import { Icon } from "../../index";

/**
 * A component that renders the `mushroom` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mushroom?s=regular mushroom}
 * @preview ![mushroom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mushroom.svg)
 */
const Mushroom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 258.1C24 133.2 125.2 32 250.1 32l11.8 0C386.8 32 488 133.2 488 258.1c0 34.2-27.7 61.9-61.9 61.9l-105.5 0-129.1 0L85.9 320C51.7 320 24 292.3 24 258.1zm416 0c0-12-1.2-23.7-3.4-35C427.8 233.4 414.6 240 400 240c-26.5 0-48-21.5-48-48c0-26.1 20.8-47.3 46.7-48c-24.2-29-57.5-50.2-95.4-59.2c.5 3.7 .8 7.4 .8 11.2c0 44.2-35.8 80-80 80c-38.1 0-70-26.7-78.1-62.4C101.2 146 72 198.6 72 258.1c0 7.7 6.2 13.9 13.9 13.9l340.2 0c7.7 0 13.9-6.2 13.9-13.9zM234.3 352l-15 80 73.4 0-15-80 48.8 0 16.9 90.1c1.8 9.4-.7 19-6.8 26.3s-15.1 11.6-24.6 11.6l-112 0c-9.5 0-18.5-4.2-24.6-11.6s-8.6-17-6.8-26.3L185.4 352l48.8 0zM144 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Mushroom;