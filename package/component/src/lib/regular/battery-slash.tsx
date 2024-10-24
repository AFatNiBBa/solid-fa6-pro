
import { Icon } from "../../index";

/**
 * A component that renders the `battery-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-slash?s=regular battery-slash}
 * @preview ![battery-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/battery-slash.svg)
 */
const BatterySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-87.5-68.6C563.1 386 576 362.5 576 336l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80L154.8 96 38.8 5.1zM216 144l280 0c17.7 0 32 14.3 32 32l0 160c0 15.9-11.6 29.1-26.7 31.6L216 144zM406.2 416l-60.9-48L112 368c-17.7 0-32-14.3-32-32l0-160c0-5.1 1.2-10 3.4-14.3l-38-30C36.9 144.4 32 159.6 32 176l0 160c0 44.2 35.8 80 80 80l294.2 0z" />
    </Icon>
);

export default BatterySlash;