
import { Icon } from "../../index";

/**
 * A component that renders the `clock-seven-thirty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-seven-thirty?s=regular clock-seven-thirty}
 * @preview ![clock-seven-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/clock-seven-thirty.svg)
 */
const ClockSevenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 0 416 0A208 208 0 1 0 48 256zm464 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM232 392l0-56.7-20 30c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l64-96c5.9-8.8 16.8-12.7 26.9-9.7s17 12.4 17 23l0 136c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
    </Icon>
);

export default ClockSevenThirty;