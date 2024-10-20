
import { Icon } from "../../index";

/**
 * A component that renders the `clock-desk` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-desk?s=sharp-light clock-desk}
 * @preview ![clock-desk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clock-desk.svg)
 */
const ClockDesk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 224a192 192 0 1 1 384 0A192 192 0 1 1 32 224zM416 339.4L416 480 32 480l0-140.6C71.2 404.5 142.5 448 224 448s152.8-43.5 192-108.6zM0 224L0 496l0 16 16 0 416 0 16 0 0-16 0-272C448 100.3 347.7 0 224 0S0 100.3 0 224zM240 96l-32 0 0 16 0 112 0 6.6 4.7 4.7 48 48L272 294.6 294.6 272l-11.3-11.3L240 217.4 240 112l0-16z" />
    </Icon>
);

export default ClockDesk;