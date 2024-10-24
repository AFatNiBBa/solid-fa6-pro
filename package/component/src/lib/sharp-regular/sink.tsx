
import { Icon } from "../../index";

/**
 * A component that renders the `sink` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sink?s=sharp-regular sink}
 * @preview ![sink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sink.svg)
 */
const Sink: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 88c0-22.1 17.9-40 40-40s40 17.9 40 40l0 24 0 24 48 0 0-24 0-24c0-48.6-39.4-88-88-88s-88 39.4-88 88l0 200-72 0 0-56 0-24-24 0-80 0-24 0 0 48 24 0 56 0 0 32-88 0L0 288l0 48 24 0 208 0 48 0 208 0 24 0 0-48-24 0-88 0 0-32 64 0 24 0 0-48-24 0-88 0-24 0 0 24 0 56-72 0 0-200zM32 368l0 24c0 66.3 53.7 120 120 120l208 0c66.3 0 120-53.7 120-120l0-24-48 0 0 24c0 39.8-32.2 72-72 72l-208 0c-39.8 0-72-32.2-72-72l0-24-48 0z" />
    </Icon>
);

export default Sink;