
import { Icon } from "../../index";

/**
 * A component that renders the `shield-cross` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-cross?s=solid shield-cross}
 * @preview ![shield-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/shield-cross.svg)
 */
const ShieldCross: typeof Icon = x => (
    <Icon {...x}>
        <path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM256 66.8l32 13.6 0 47.7c0 17.7 14.3 32 32 32l111.3 0c-1.2 19.6-4.2 41.4-9.4 64l-102 0c-17.7 0-32 14.3-32 32l0 170.8c-10 6.5-20.7 12.5-32 18c-11.3-5.5-22-11.5-32-18L224 256c0-17.7-14.3-32-32-32L90.1 224c-5.2-22.6-8.1-44.4-9.4-64L192 160c17.7 0 32-14.3 32-32l0-47.7 32-13.6z" />
    </Icon>
);

export default ShieldCross;