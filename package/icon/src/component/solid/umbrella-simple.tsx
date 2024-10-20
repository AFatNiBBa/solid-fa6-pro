
import { Icon } from "../../index";

/**
 * A component that renders the `umbrella-simple` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella-simple?s=solid umbrella-simple}
 * @preview ![umbrella-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/umbrella-simple.svg)
 */
const UmbrellaSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c17.7 0 32 14.3 32 32l0 2C403.8 48.4 495.6 140.2 510 256.1c2.2 17.5-12.4 31.9-30 31.9L32 288C14.3 288-.2 273.6 2 256.1C16.4 140.2 108.2 48.4 224 34l0-2c0-17.7 14.3-32 32-32zm32 430.6c0 45-36.5 81.4-81.4 81.4c-30.8 0-59-17.4-72.8-45l-2.3-4.7c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l2.3 4.7c3 5.9 9 9.6 15.6 9.6c9.6 0 17.4-7.8 17.4-17.4L224 320l64 0 0 110.6z" />
    </Icon>
);

export default UmbrellaSimple;