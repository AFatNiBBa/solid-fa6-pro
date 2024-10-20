
import { Icon } from "../../index";

/**
 * A component that renders the `kite` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kite?s=sharp-regular kite}
 * @preview ![kite](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/kite.svg)
 */
const Kite: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M285.4 354.6s0 0 0 0L480 160 592 272l0 11.3L285.4 354.6zM480 160L368 48l224 0L480 160zM615.2 327.2l24.8-5.8 0-25.4 0-248 0-16 0-32L608 0 592 0 344 0 318.6 0l-5.8 24.8-79.5 342-.5 2-1.4 5.8-.4 .4-89 89L120 464l0-107.3-24-10-24 10L72 488l0 24 24 0 56 0 9.9 0 7-7 96-96 .4-.4 5.8-1.4 2-.5 342-79.5zM0 128l0 48 24 0 48 0 0 110L0 256l0 96 72-30 24-10 24 10 72 30 0-96-72 30 0-134 0-24-24 0-72 0L0 128z" />
    </Icon>
);

export default Kite;