
import { Icon } from "../../index";

/**
 * A component that renders the `battery-empty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-empty?s=thin battery-empty}
 * @preview ![battery-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/battery-empty.svg)
 */
const BatteryEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 112c-35.3 0-64 28.7-64 64l0 160c0 35.3 28.7 64 64 64l368 0c35.3 0 64-28.7 64-64l0-16 0-16 0-96 0-16 0-16c0-35.3-28.7-64-64-64L80 112zM528 320l0 16c0 44.2-35.8 80-80 80L80 416c-44.2 0-80-35.8-80-80L0 176c0-44.2 35.8-80 80-80l368 0c44.2 0 80 35.8 80 80l0 16 16 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-16 0zm0-112l0 96 16 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0z" />
    </Icon>
);

export default BatteryEmpty;