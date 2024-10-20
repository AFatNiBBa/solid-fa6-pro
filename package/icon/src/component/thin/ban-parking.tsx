
import { Icon } from "../../index";

/**
 * A component that renders the `ban-parking` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban-parking?s=thin ban-parking}
 * @preview ![ban-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ban-parking.svg)
 */
const BanParking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M420 431.3L80.7 92C40.6 134.9 16 192.6 16 256c0 132.5 107.5 240 240 240c63.4 0 121.1-24.6 164-64.7zM431.3 420C471.4 377.1 496 319.4 496 256C496 123.5 388.5 16 256 16C192.6 16 134.9 40.6 92 80.7l84 84 0-20.7c0-8.8 7.2-16 16-16l96 0c48.6 0 88 39.4 88 88c0 40.3-27.1 74.2-64 84.7L431.3 420zM192 180.7L298.5 287.2c34.8-5.1 61.5-35.1 61.5-71.2c0-39.8-32.2-72-72-72l-96 0 0 36.7zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176 40l0-46.1 16 16 0 22.1 22.1 0 16 16L192 304l0 72c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-80z" />
    </Icon>
);

export default BanParking;