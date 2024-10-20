
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mortar-pestle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mortar-pestle?s=duotone mortar-pestle}
 * @preview ![mortar-pestle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mortar-pestle.svg)
 */
const MortarPestle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M209.3 192c52 0 103.9 0 155.9 0L502.6 54.6c11.8-11.8 12.6-30.8 1.6-43.5S474.5-3.7 461 6.2L213.7 188.5c-1.5 1.1-3 2.3-4.4 3.5z" />
        <path d="M0 224c0-17.7 14.3-32 32-32l448 0c17.7 0 32 14.3 32 32s-14.3 32-32 32c0 82.5-43.4 147.7-123.9 176.2c11.1 13.9 19.4 30.3 23.9 48.1c4.4 17.1-10.4 31.7-28.1 31.7l-192 0c-17.7 0-32.4-14.6-28.1-31.7c4.5-17.8 12.8-34.1 23.9-48.1C75.4 403.7 32 338.5 32 256c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default MortarPestle;