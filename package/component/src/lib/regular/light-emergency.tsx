
import { Icon } from "../../index";

/**
 * A component that renders the `light-emergency` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-emergency?s=regular light-emergency}
 * @preview ![light-emergency](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/light-emergency.svg)
 */
const LightEmergency: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 304l0-96c0-70.7-57.3-128-128-128S96 137.3 96 208l0 96-48 0 0-96c0-97.2 78.8-176 176-176s176 78.8 176 176l0 96-48 0zM48 384l0 48 352 0 0-48L48 384zm0-48l352 0c26.5 0 48 21.5 48 48l0 48c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-48c0-26.5 21.5-48 48-48zM160 208c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-53 43-96 96-96c8.8 0 16 7.2 16 16s-7.2 16-16 16c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default LightEmergency;