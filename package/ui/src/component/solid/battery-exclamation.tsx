
import { Icon } from "../../index";

/**
 * A component that renders the `battery-exclamation` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-exclamation?s=solid battery-exclamation}
 * @preview ![battery-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/battery-exclamation.svg)
 */
const BatteryExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M208 96l0 64L80 160c-8.8 0-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16l118.7 0c-4.3 9.8-6.7 20.6-6.7 32s2.4 22.2 6.7 32L80 416c-44.2 0-80-35.8-80-80L0 176c0-44.2 35.8-80 80-80l128 0zM464 416l-118.7 0c4.3-9.8 6.7-20.6 6.7-32s-2.4-22.2-6.7-32L464 352c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-128 0 0-64 128 0c44.2 0 80 35.8 80 80l0 16c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 16c0 44.2-35.8 80-80 80zM272 96c13.3 0 24 10.7 24 24l0 176c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-176c0-13.3 10.7-24 24-24zM240 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default BatteryExclamation;