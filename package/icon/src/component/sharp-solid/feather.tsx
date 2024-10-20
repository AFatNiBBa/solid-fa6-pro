
import { Icon } from "../../index";

/**
 * A component that renders the `feather` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather?s=sharp-solid feather}
 * @preview ![feather](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/feather.svg)
 */
const Feather: typeof Icon = x => (
    <Icon {...x}>
        <path d="M113.9 448L73 489l-17 17L22.1 472l17-17L287.2 206.8l-22.3-22.3-11.3 11.3L64 385.4 64 224 242.7 45.3C271.7 16.3 311 0 352 0s80.3 16.3 109.3 45.3l5.5 5.5C495.7 79.7 512 119 512 160c0 26.3-6.7 51.9-19.2 74.6L368 272l0 16 80 0-52.6 52.6L304 368l0 16 48 0-64 64-174.1 0z" />
    </Icon>
);

export default Feather;