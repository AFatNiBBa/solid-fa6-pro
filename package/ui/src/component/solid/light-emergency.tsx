
import { Icon } from "../../index";

/**
 * A component that renders the `light-emergency` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-emergency?s=solid light-emergency}
 * @preview ![light-emergency](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/light-emergency.svg)
 */
const LightEmergency: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 192c0-88.4 71.6-160 160-160s160 71.6 160 160l0 160L64 352l0-160zm160-80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-61.9 0-112 50.1-112 112c0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.2 35.8-80 80-80zM32 384l384 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default LightEmergency;