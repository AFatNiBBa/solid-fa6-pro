
import { Icon } from "../../index";

/**
 * A component that renders the `bell-school` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-school?s=sharp-thin bell-school}
 * @preview ![bell-school](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bell-school.svg)
 */
const BellSchool: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 400a192 192 0 1 0 0-384 192 192 0 1 0 0 384zm0 16c-48.3 0-92.7-16.4-128-44l0 124 192 0 64 0 0-124c-35.3 27.6-79.7 44-128 44zm64 96L72 512l-8 0 0-8 0-145.9C24.6 320.2 0 267 0 208C0 93.1 93.1 0 208 0S416 93.1 416 208c0 59-24.6 112.2-64 150.1L352 496l104 0 0-48.7c-22.7-3.8-40-23.6-40-47.3c0-26.5 21.5-48 48-48s48 21.5 48 48c0 23.8-17.3 43.5-40 47.3l0 56.7 0 8-8 0-112 0-8 0-72 0zM208 272a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-144a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM496 400a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default BellSchool;