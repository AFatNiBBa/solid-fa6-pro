
import { Icon } from "../../index";

/**
 * A component that renders the `ribbon` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ribbon?s=sharp-light ribbon}
 * @preview ![ribbon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ribbon.svg)
 */
const Ribbon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 112l-32 0-32 0 0 32 0 3.6L426.5 408.1 448 432l-26.2 18.7L336 512 48 192l0-64L136 0l56 0 32 0 32 0 56 0 88 128 0 64-62.5 69.4L316 237.5l52-57.8 0-41.8L295.2 32 288 32l-32 0-64 0-32 0-7.2 0L80 137.9l0 41.8L340.7 469.3l59.6-42.6L168.2 169l-8.2-9.1 0-12.3 0-35.6 0-32 32 0 64 0 32 0 0 32 0 35.6 0 12.3-8.2 9.1-12.7 14.1-21.5-23.9L256 147.6l0-3.6 0-32zM110.5 309.3L132 333.2 47.7 426.8l59.6 42.6 73.6-81.8 21.5 23.9L112 512 26.2 450.7 0 432l21.5-23.9 88.9-98.8z" />
    </Icon>
);

export default Ribbon;