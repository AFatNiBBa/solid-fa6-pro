
import { Icon } from "../../index";

/**
 * A component that renders the `umbrella-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella-simple?s=sharp-regular umbrella-simple}
 * @preview ![umbrella-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/umbrella-simple.svg)
 */
const UmbrellaSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 0l0 24 0 9.1C394.1 43.7 486.5 129.2 507.5 240c3 15.5 4.5 31.6 4.5 48l-48 0L48 288 0 288c0-16.4 1.5-32.5 4.5-48C25.5 129.2 117.9 43.7 232 33.1l0-9.1 0-24 48 0zM256 80C157.6 80 75.2 148.3 53.6 240l404.9 0C436.8 148.3 354.4 80 256 80zm24 358.6c0 40.6-32.9 73.4-73.4 73.4c-27.8 0-53.2-15.7-65.7-40.6l-2.3-4.7-10.7-21.5 42.9-21.5 10.7 21.5 2.3 4.7c4.3 8.6 13.1 14.1 22.8 14.1c14.1 0 25.4-11.4 25.4-25.4L232 320l48 0 0 118.6z" />
    </Icon>
);

export default UmbrellaSimple;