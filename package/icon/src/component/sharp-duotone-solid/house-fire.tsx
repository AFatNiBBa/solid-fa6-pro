
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-fire` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-fire?s=sharp-duotone-solid house-fire}
 * @preview ![house-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-fire.svg)
 */
const HouseFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 240l0 47.6 64.1 0 0 224.4L224 512l0-160 32 0 32 0c.1-56.8 36.1-108.7 71.8-149.9c24.3-28 51.2-52.6 79.6-76.1L288.4 0 0 240z" />
        <path d="M320 352c0-89.6 85.3-165.3 128-192l64 64 32-32c76.8 64 96 133.3 96 160c0 88.4-71.6 160-160 160s-160-71.6-160-160zM480 464.2c35.3 0 64-28.7 64-64c0-48-64-96-64-96s-64 48-64 96c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default HouseFire;