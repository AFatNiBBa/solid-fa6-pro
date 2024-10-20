
import { Icon } from "../../index";

/**
 * A component that renders the `house-fire` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-fire?s=sharp-regular house-fire}
 * @preview ![house-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/house-fire.svg)
 */
const HouseFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M303.5 13.7L288 .5 272.5 13.7l-264 224 31.1 36.6L64 253.5 64 488l0 24 24 0 285.6 0c-19.3-12.9-36.2-29.2-49.7-48L240 464l0-144 51.7 0c3.8-16.6 10.3-32.7 18.4-48L216 272l-24 0 0 24 0 168-80 0 0-251.2L288 63.5l113.1 96c11.8-11 24-21.6 36.5-32L303.5 13.7zM513 224.1c-32.3-37.5-65-64-65-64s-128 103.6-128 192s71.6 160 160 160s160-71.6 160-160c0-73.6-96-160-96-160s-13.9 12.5-31 32zM530 433c-15 10-31 15-49 15c-45 0-81-29-81-78c0-24 15-45 45-82c4 5 62 79 62 79l36-42c3 4 5 8 7 12c18 33 10 75-20 96z" />
    </Icon>
);

export default HouseFire;