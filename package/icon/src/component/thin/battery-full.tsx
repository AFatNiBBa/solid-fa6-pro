
import { Icon } from "../../index";

/**
 * A component that renders the `battery-full` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-full?s=thin battery-full}
 * @preview ![battery-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/battery-full.svg)
 */
const BatteryFull: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 112c35.3 0 64 28.7 64 64l0 16 0 16 0 96 0 16 0 16c0 35.3-28.7 64-64 64L80 400c-35.3 0-64-28.7-64-64l0-160c0-35.3 28.7-64 64-64l368 0zm80 224l0-16 16 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-16 0 0-16c0-44.2-35.8-80-80-80L80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l368 0c44.2 0 80-35.8 80-80zm0-32l0-96 16 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-16 0zM112 176l304 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-304 0c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zM64 208l0 96c0 26.5 21.5 48 48 48l304 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-304 0c-26.5 0-48 21.5-48 48z" />
    </Icon>
);

export default BatteryFull;