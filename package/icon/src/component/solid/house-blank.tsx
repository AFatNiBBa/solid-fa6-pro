
import { Icon } from "../../index";

/**
 * A component that renders the `house-blank` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-blank?s=solid house-blank}
 * @preview ![house-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/house-blank.svg)
 */
const HouseBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
    </Icon>
);

export default HouseBlank;