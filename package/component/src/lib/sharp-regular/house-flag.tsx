
import { Icon } from "../../index";

/**
 * A component that renders the `house-flag` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-flag?s=sharp-regular house-flag}
 * @preview ![house-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/house-flag.svg)
 */
const HouseFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M496 0L448 0l0 24 0 8 0 160 0 320 48 0 0-320 144 0 0-160L496 32l0-8 0-24zM416 133L286.3 36.7 272.1 26.2 257.8 36.6 27.5 205.4 8.2 219.6l28.4 38.7 19.4-14.2 8.1-5.9L64 488l0 24 24 0 104 0 0 .6 48 0 0-.6 64 0 0 .6 48 0 0-.6 64 0 0-48-64 0 0-136 0-24-24 0-112 0-24 0 0 24 0 136-80 0 0-245.6 0-15.4L271.9 85.8 416 192.7l0-59.8zM304 352l0 112-64 0 0-112 64 0z" />
    </Icon>
);

export default HouseFlag;