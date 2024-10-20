
import { Icon } from "../../index";

/**
 * A component that renders the `umbrella-simple` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella-simple?s=regular umbrella-simple}
 * @preview ![umbrella-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/umbrella-simple.svg)
 */
const UmbrellaSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c13.3 0 24 10.7 24 24l0 9.1c119.6 11.1 215.3 104.5 230 223c2.2 17.5-12.4 31.9-30 31.9L32 288C14.3 288-.2 273.6 2 256.1C16.7 137.6 112.4 44.2 232 33.1l0-9.1c0-13.3 10.7-24 24-24zM458.4 240C436.8 148.3 354.3 80 256 80S75.2 148.3 53.6 240l404.9 0zM280 438.6c0 40.6-32.9 73.4-73.4 73.4c-27.8 0-53.2-15.7-65.7-40.6l-2.3-4.7c-5.9-11.9-1.1-26.3 10.7-32.2s26.3-1.1 32.2 10.7l2.3 4.7c4.3 8.6 13.1 14.1 22.8 14.1c14.1 0 25.4-11.4 25.4-25.4L232 320l48 0 0 118.6z" />
    </Icon>
);

export default UmbrellaSimple;