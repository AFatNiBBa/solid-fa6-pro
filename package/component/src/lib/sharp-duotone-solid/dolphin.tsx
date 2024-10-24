
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dolphin` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolphin?s=sharp-duotone-solid dolphin}
 * @preview ![dolphin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dolphin.svg)
 */
const Dolphin: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 221.9L0 240l0 16 0 32 32 0 144 0 16 0 16 0 80 64 32 0 0-64 6.6 0c31.7 0 57.4 25.7 57.4 57.4c0 30.6-24 55.8-54.5 57.3l-60 3L248 352l-88 0 32 80-32 80 88 0 18.3-45.7 72.5 4c94.1 5.2 173.3-70 173.3-164.3c0-81.8-32.2-156.3-84.6-211.3L480 16 464 0 335.4 28.6C296.3 10.2 252.6 0 206.5 0L176 0C96.5 0 32 64.5 32 144c0 18.6 3.5 36.4 10 52.7L15.5 212.6 0 221.9zM200 144a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M176 120a24 24 0 1 0 0 48 24 24 0 1 0 0-48z" />
    </Icon>
);

export default Dolphin;