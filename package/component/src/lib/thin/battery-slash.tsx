
import { Icon } from "../../index";

/**
 * A component that renders the `battery-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-slash?s=thin battery-slash}
 * @preview ![battery-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/battery-slash.svg)
 */
const BatterySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM386.2 400L112 400c-35.3 0-64-28.7-64-64l0-160c0-12.9 3.8-24.8 10.3-34.9l-12.6-9.9C37.1 144 32 159.4 32 176l0 160c0 44.2 35.8 80 80 80l294.5 0-20.3-16zM480 96L233.5 96l20.3 16L480 112c35.3 0 64 28.7 64 64l0 16 0 16 0 96 0 16 0 16c0 1.7-.1 3.3-.2 5l14.5 11.4c1.1-5.3 1.7-10.8 1.7-16.4l0-16 16 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-16 0 0-16c0-44.2-35.8-80-80-80zm80 112l16 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-16 0 0-96z" />
    </Icon>
);

export default BatterySlash;