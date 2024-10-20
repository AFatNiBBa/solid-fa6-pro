
import { Icon } from "../../index";

/**
 * A component that renders the `light-emergency` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-emergency?s=sharp-light light-emergency}
 * @preview ![light-emergency](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/light-emergency.svg)
 */
const LightEmergency: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 320l0-128c0-70.7-57.3-128-128-128S96 121.3 96 192l0 128-32 0 0-128c0-88.4 71.6-160 160-160s160 71.6 160 160l0 128-32 0zM32 384l0 64 384 0 0-64L32 384zm0-32l384 0 32 0 0 32 0 64 0 32-32 0L32 480 0 480l0-32 0-64 0-32 32 0zM160 192l-32 0c0-53 43-96 96-96l0 32c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default LightEmergency;