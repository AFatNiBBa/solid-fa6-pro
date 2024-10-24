
import { Icon, generic } from "../../index";

/**
 * A component that renders the `parachute-box` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/parachute-box?s=sharp-duotone-solid parachute-box}
 * @preview ![parachute-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/parachute-box.svg)
 */
const ParachuteBox: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M24.9 192l43.2 0L184.5 320l55.5 0 0-128 32 0 0 128 55.5 0L443.8 192l43.2 0L352 340.6 352 512l-192 0 0-171.4L24.9 192z" />
        <path d="M128.5 192l254.9 0c.3-5.3 .5-10.6 .5-16c0-51-15.9-96-40.2-127.6C319.5 16.9 288.2 0 256 0s-63.5 16.9-87.8 48.4C143.9 80 128 125 128 176c0 5.4 .2 10.7 .5 16zM358.9 16.7C393.8 54.8 416 112.1 416 176c0 5.4-.2 10.7-.5 16l96.5 0c-8.3-49.9-50.3-138.5-153.1-175.3zm-205.7 0C50.3 53.5 8.3 142.1 0 192l96.5 0c-.3-5.3-.5-10.6-.5-16c0-64 22.2-121.2 57.1-159.3z" />
    </Icon>
);

export default ParachuteBox;