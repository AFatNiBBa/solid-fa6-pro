
import { Icon } from "../../index";

/**
 * A component that renders the `light-emergency` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-emergency?s=thin light-emergency}
 * @preview ![light-emergency](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/light-emergency.svg)
 */
const LightEmergency: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M368 320l0-128c0-79.5-64.5-144-144-144S80 112.5 80 192l0 128-16 0 0-128c0-88.4 71.6-160 160-160s160 71.6 160 160l0 128-16 0zM48 368c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l352 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L48 368zm0-16l352 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-32c0-26.5 21.5-48 48-48zm96.4-168c-.4 4.4-4 8-8.4 8s-8-3.6-7.7-8c3.8-46.6 41-83.8 87.7-87.7c4.4-.4 8 3.3 8 7.7s-3.6 8-8 8.4c-37.8 3.7-67.9 33.8-71.6 71.6z" />
    </Icon>
);

export default LightEmergency;