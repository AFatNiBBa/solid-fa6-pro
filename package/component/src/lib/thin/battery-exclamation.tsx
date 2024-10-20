
import { Icon } from "../../index";

/**
 * A component that renders the `battery-exclamation` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-exclamation?s=thin battery-exclamation}
 * @preview ![battery-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/battery-exclamation.svg)
 */
const BatteryExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 112c35.3 0 64 28.7 64 64l0 16 0 16 0 96 0 16 0 16c0 35.3-28.7 64-64 64L80 400c-35.3 0-64-28.7-64-64l0-160c0-35.3 28.7-64 64-64l368 0zm80 224l0-16 16 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-16 0 0-16c0-44.2-35.8-80-80-80L80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l368 0c44.2 0 80-35.8 80-80zm0-32l0-96 16 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-16 0zM272 144c-4.4 0-8 3.6-8 8l0 144c0 4.4 3.6 8 8 8s8-3.6 8-8l0-144c0-4.4-3.6-8-8-8zm16 208a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default BatteryExclamation;