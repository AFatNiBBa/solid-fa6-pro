
import { Icon } from "../../index";

/**
 * A component that renders the `clock-three-thirty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-three-thirty?s=sharp-light clock-three-thirty}
 * @preview ![clock-three-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clock-three-thirty.svg)
 */
const ClockThreeThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 0 448 0A224 224 0 1 0 32 256zm480 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM240 400l0-144 0-16 16 0 112 0 16 0 0 32-16 0-96 0 0 128 0 16-32 0 0-16z" />
    </Icon>
);

export default ClockThreeThirty;