
import { Icon } from "../../index";

/**
 * A component that renders the `left-long` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-long?s=light left-long}
 * @preview ![left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/left-long.svg)
 */
const LeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 328l0 49.3c0 3.7-3 6.7-6.7 6.7c-1.9 0-3.7-.8-5-2.2L35.8 256 148.3 130.2c1.3-1.4 3.1-2.2 5-2.2c3.7 0 6.7 3 6.7 6.7l0 49.3c0 17.7 14.3 32 32 32l272 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-272 0c-17.7 0-32 14.3-32 32zM5.3 242C1.9 245.9 0 250.8 0 256s1.9 10.1 5.3 14L124.5 403.1c7.3 8.2 17.8 12.9 28.8 12.9c21.4 0 38.7-17.3 38.7-38.7l0-17.3 0-32 32 0 240 0c26.5 0 48-21.5 48-48l0-48c0-26.5-21.5-48-48-48l-240 0-32 0 0-32 0-17.3c0-21.4-17.3-38.7-38.7-38.7c-11 0-21.5 4.7-28.8 12.9L5.3 242z" />
    </Icon>
);

export default LeftLong;