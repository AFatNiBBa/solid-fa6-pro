
import { Icon } from "../../index";

/**
 * A component that renders the `farm` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/farm?s=sharp-regular farm}
 * @preview ![farm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/farm.svg)
 */
const Farm: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 464l80 0 0 24 0 24-80 0L0 512l0-48L0 112C0 50.1 50.1 0 112 0c54.6 0 100.1 39.1 110 90.8l-4.4 1.9-19.4 8.5-8.9 19.2-26 55.7L48 176l0 288zM176 128l0-16c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 16 128 0zm32 336l96 0 0-96 128 0 0 96 96 0 0-190.5L483.1 164.6 368 116.1 252.9 164.6 208 273.5 208 464zm-48 0l0-200 56-136L368 64l152 64 56 136 0 200 0 48-48 0-320 0-48 0 0-48zM416 224l0 96-96 0 0-96 96 0z" />
    </Icon>
);

export default Farm;