
import { Icon } from "../../index";

/**
 * A component that renders the `heart-pulse` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-pulse?s=sharp-solid heart-pulse}
 * @preview ![heart-pulse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/heart-pulse.svg)
 */
const HeartPulse: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 288l80 0 16 0 6.2-14.8 18.7-44.9 49.3 109.5 20.7 46.1 22.6-45.2L320 253.7l10.5 21.1 6.6 13.3 14.8 0 96 0s0 0 0 0L256 480 64 288s0 0 0 0zM20.8 240C7.3 218.5 0 193.5 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8L256 96l24.2-24.2c25.5-25.5 60-39.8 96-39.8C451.2 32 512 92.8 512 167.8c0 25.8-7.3 50.8-20.8 72.2l-124.4 0-25.4-50.7L320 146.3l-21.5 42.9-41.4 82.8L205.9 158.2l-22.7-50.5-21.3 51.1L128 240 20.8 240z" />
    </Icon>
);

export default HeartPulse;