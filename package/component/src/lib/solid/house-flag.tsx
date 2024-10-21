
import { Icon } from "../../index";

/**
 * A component that renders the `house-flag` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-flag?s=solid house-flag}
 * @preview ![house-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/house-flag.svg)
 */
const HouseFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 0c-17.7 0-32 14.3-32 32l0 160 0 320 64 0 0-320 112 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16L512 32c0-17.7-14.3-32-32-32zM416 159L276.8 39.7c-12-10.3-29.7-10.3-41.7 0l-224 192C1 240.4-2.7 254.5 2 267.1S18.6 288 32 288l32 0 0 192c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-96c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 96c0 17.7 14.3 32 32 32l64.7 0 .2 0-1 0 0-353z" />
    </Icon>
);

export default HouseFlag;