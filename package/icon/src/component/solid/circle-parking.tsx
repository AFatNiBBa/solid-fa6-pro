
import { Icon } from "../../index";

/**
 * A component that renders the `circle-parking` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-parking?s=solid circle-parking}
 * @preview ![circle-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-parking.svg)
 */
const CircleParking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm232 0l48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0 0 64zm48 64l-48 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64 0-120c0-22.1 17.9-40 40-40l72 0c53 0 96 43 96 96s-43 96-96 96z" />
    </Icon>
);

export default CircleParking;