
import { Icon, generic } from "../../index";

/**
 * A component that renders the `volume` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume?s=sharp-duotone-solid volume}
 * @preview ![volume](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/volume.svg)
 */
const Volume: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M412.8 217.6c11.7 8.8 19.2 22.7 19.2 38.4s-7.5 29.6-19.2 38.4l28.8 38.4C464.9 315.3 480 287.4 480 256s-15.1-59.3-38.4-76.8l-28.8 38.4zm57.6-76.8c35 26.3 57.6 68.1 57.6 115.2s-22.6 88.9-57.6 115.2l28.8 38.4c46.6-35 76.8-90.8 76.8-153.6s-30.2-118.6-76.8-153.6l-28.8 38.4z" />
        <path d="M32 352V160H160L304 32h48V480H304L160 352H32z" />
    </Icon>
);

export default Volume;