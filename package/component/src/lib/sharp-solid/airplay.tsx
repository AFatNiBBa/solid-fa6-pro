
import { Icon } from "../../index";

/**
 * A component that renders the `airplay` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/airplay?s=sharp-solid airplay}
 * @preview ![airplay](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/airplay.svg)
 */
const Airplay: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 96L64 96l0 256 105 0-62.5 56.2L97.9 416 64 416 0 416l0-64L0 96 0 32l64 0 448 0 64 0 0 64 0 256 0 64-64 0-33.9 0-8.7-7.8L407 352l105 0 0-256zM288 288L448 432l0 48-320 0 0-48L288 288z" />
    </Icon>
);

export default Airplay;