
import { Icon } from "../../index";

/**
 * A component that renders the `shutters` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shutters?s=sharp-light shutters}
 * @preview ![shutters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/shutters.svg)
 */
const Shutters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 32L0 32 0 48l0 64 0 16 16 0 480 0 16 0 0-16 0-64 0-16-16 0L16 32zM32 96l0-32 448 0 0 32L32 96zM8 448L0 480l33 0 446 0 33 0-8-32-16-64-33 0 16 64L41 448l16-64-33 0L8 448zM24 256L8 320 0 352l33 0 446 0 33 0-8-32-16-64-33 0 16 64L41 320l16-64-33 0zm488-32l-8-32-8-32-33 0 8 32L41 192l8-32-33 0L8 192 0 224l33 0 446 0 33 0z" />
    </Icon>
);

export default Shutters;