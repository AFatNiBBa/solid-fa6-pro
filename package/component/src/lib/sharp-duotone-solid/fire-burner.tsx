
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fire-burner` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-burner?s=sharp-duotone-solid fire-burner}
 * @preview ![fire-burner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fire-burner.svg)
 */
const FireBurner: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384L0 512l640 0 0-128-32 0 0-104 0-24-24 0-48 0-24 0 0 48 24 0 24 0 0 80L80 384l0-80 24 0 24 0 0-48-24 0-48 0-24 0 0 24 0 104L0 384zm224 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M160 192c0-89.6 85.3-165.3 128-192l64 64 32-32c76.8 64 96 133.3 96 160c0 88.4-71.6 160-160 160s-160-71.6-160-160zM320 304.2c35.3 0 64-28.7 64-64c0-48-64-96-64-96s-64 48-64 96c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default FireBurner;