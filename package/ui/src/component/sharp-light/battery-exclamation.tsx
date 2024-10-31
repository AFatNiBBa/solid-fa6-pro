
import { Icon } from "../../index";

/**
 * A component that renders the `battery-exclamation` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-exclamation?s=sharp-light battery-exclamation}
 * @preview ![battery-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/battery-exclamation.svg)
 */
const BatteryExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 96l128 0 0 32L80 128c-26.5 0-48 21.5-48 48l0 160c0 26.5 21.5 48 48 48l128 0 0 32L80 416c-44.2 0-80-35.8-80-80L0 176c0-44.2 35.8-80 80-80zM432 384c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-96 0 0-32 96 0c44.2 0 80 35.8 80 80l0 160c0 44.2-35.8 80-80 80l-96 0 0-32 96 0zM560 192c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zM288 96l0 16 0 192 0 16-32 0 0-16 0-192 0-16 32 0zM248 352l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default BatteryExclamation;