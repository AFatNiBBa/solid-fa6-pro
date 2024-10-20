
import { Icon } from "../../index";

/**
 * A component that renders the `square-parking` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-parking?s=solid square-parking}
 * @preview ![square-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-parking.svg)
 */
const SquareParking: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM192 256l48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0 0 64zm48 64l-48 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64 0-120c0-22.1 17.9-40 40-40l72 0c53 0 96 43 96 96s-43 96-96 96z" />
    </Icon>
);

export default SquareParking;