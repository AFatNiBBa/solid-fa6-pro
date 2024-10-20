
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blanket-fire` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blanket-fire?s=sharp-duotone-solid blanket-fire}
 * @preview ![blanket-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/blanket-fire.svg)
 */
const BlanketFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 32 0 192l0 32 0 96 0 96 0 32 32 0 281.8 0c-11.3-19.4-19.2-41-23.1-64L64 384l0-64 0-64 249.9 0c8.6-15.9 18.6-30.6 29.1-43.7c29.2-36.6 64-64.6 88.1-79.6l17-10.6L448 32l0-32L416 0 32 0 0 0zM96 288l0 64 32 0 160 0c0-22.7 4.4-44.1 11.5-64L128 288l-32 0z" />
        <path d="M320 352c0-89.6 85.3-165.3 128-192l64 64 32-32c76.8 64 96 133.3 96 160c0 88.4-71.6 160-160 160s-160-71.6-160-160zM480 464.2c35.3 0 64-28.7 64-64c0-48-64-96-64-96s-64 48-64 96c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default BlanketFire;