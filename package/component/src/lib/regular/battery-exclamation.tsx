
import { Icon } from "../../index";

/**
 * A component that renders the `battery-exclamation` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-exclamation?s=regular battery-exclamation}
 * @preview ![battery-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/battery-exclamation.svg)
 */
const BatteryExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M208 96l0 48L80 144c-17.7 0-32 14.3-32 32l0 160c0 17.7 14.3 32 32 32l113.6 0c-1 5.2-1.6 10.5-1.6 16c0 11.4 2.4 22.2 6.7 32L80 416c-44.2 0-80-35.8-80-80L0 176c0-44.2 35.8-80 80-80l128 0zM464 416l-118.7 0c4.3-9.8 6.7-20.6 6.7-32c0-5.5-.6-10.8-1.6-16L464 368c17.7 0 32-14.3 32-32l0-160c0-17.7-14.3-32-32-32l-128 0 0-48 128 0c44.2 0 80 35.8 80 80l0 16c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 16c0 44.2-35.8 80-80 80zM272 96c13.3 0 24 10.7 24 24l0 176c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-176c0-13.3 10.7-24 24-24zM240 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default BatteryExclamation;