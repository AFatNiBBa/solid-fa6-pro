
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ski-boot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ski-boot?s=sharp-duotone-solid ski-boot}
 * @preview ![ski-boot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ski-boot.svg)
 */
const SkiBoot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 512l12.8-64L480 448l32 0 0 64L0 512zM44.8 288C61.9 202.7 78.9 117.4 96 32l128 0c-17.1 85.3-34.1 170.7-51.2 256l-128 0z" />
        <path d="M12.8 448L480 448l0-96L326.4 288 272 288l-16 0 0-32 16 0 60.8 0 12.8-64L288 192l-16 0 0-32 16 0 64 0L384 0 320 0l-6.4 32L224 32 172.8 288l-128 0-32 160z" />
    </Icon>
);

export default SkiBoot;