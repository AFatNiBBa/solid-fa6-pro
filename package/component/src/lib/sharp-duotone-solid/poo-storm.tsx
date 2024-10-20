
import { Icon, generic } from "../../index";

/**
 * A component that renders the `poo-storm` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/poo-storm?s=sharp-duotone-solid poo-storm}
 * @preview ![poo-storm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/poo-storm.svg)
 */
const PooStorm: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 360l0 24 88 0L144 512 320 376l0-24-88 0 40-128L96 360z" />
        <path d="M320 96c0-53-48-96-112-96c0 0 64 96-48 128l-32 0c-35.3 0-64 28.7-64 64c0 12.7 3.7 24.6 10.1 34.5C31.6 236.4 0 274.5 0 320l0 64 64 0 0-39.7L264.6 192l51 0-40 128 76.5 0 0 64 96 0 0-64c0-45.5-31.6-83.6-74.1-93.5c6.4-10 10.1-21.8 10.1-34.5c0-35.3-28.7-64-64-64l-5.5 0c3.5-10 5.5-20.8 5.5-32z" />
    </Icon>
);

export default PooStorm;