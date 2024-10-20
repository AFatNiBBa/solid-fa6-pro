
import { Icon, generic } from "../../index";

/**
 * A component that renders the `balloons` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/balloons?s=sharp-duotone-solid balloons}
 * @preview ![balloons](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/balloons.svg)
 */
const Balloons: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M324.7 261.9C340.5 231.6 352 197 352 160c0-9.9-.7-19.6-2.2-29c29-40.5 76.5-67 130.2-67c88.4 0 160 71.6 160 160c0 112-128 208-128 208l32 80-128 0 32-80s-100.3-75.2-123.3-170.1zM384 224l32 0c0-35.3 28.7-64 64-64l0-32c-53 0-96 43-96 96z" />
        <path d="M160 0c88.4 0 160 71.6 160 160c0 112-128 208-128 208l32 80L96 448l32-80s-128-96-128-208C0 71.6 71.6 0 160 0zM96 160c0-35.3 28.7-64 64-64l0-32c-53 0-96 43-96 96l32 0z" />
    </Icon>
);

export default Balloons;