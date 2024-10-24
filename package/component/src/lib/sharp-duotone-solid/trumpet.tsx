
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trumpet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trumpet?s=sharp-duotone-solid trumpet}
 * @preview ![trumpet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trumpet.svg)
 */
const Trumpet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 320c0 70.7 57.3 128 128 128l96 0 96 0c70.7 0 128-57.3 128-128l0-34.5c-20-13.2-41.5-23.1-64-27.3l0 61.7c0 29.8-20.4 54.9-48 62l0-126-16 0-32 0 0 128-40 0 0-128-48 0 0 128-40 0 0-128L81.1 256C70.2 274.8 64 296.7 64 320zm64 0c0-29.8 20.4-54.9 48-62l0 124c-27.6-7.1-48-32.2-48-62zm48-184l0 24 0 32 48 0 0-32 0-24-48 0zm88 0l0 24 0 32 48 0 0-32 0-24-48 0zm88 0l0 24 0 32 32 0 16 0 0-32 0-24-48 0z" />
        <path d="M424 256c75.6 0 142.3 68.3 184 128l32 0 0-320-32 0c-41.7 59.7-108.4 128-184 128l-40 0L48 192l0-16L0 176l0 24 0 48 0 24 48 0 0-16 336 0 40 0z" />
    </Icon>
);

export default Trumpet;