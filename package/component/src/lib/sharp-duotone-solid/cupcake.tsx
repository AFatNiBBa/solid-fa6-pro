
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cupcake` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cupcake?s=sharp-duotone-solid cupcake}
 * @preview ![cupcake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cupcake.svg)
 */
const Cupcake: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 229.2L0 320l64 0 59.9 0 32.2 0 135.8 0 32.2 0 59.9 0 64 0 0-90.8c0-41.3-26.4-78-65.6-91.1l-20.5-6.8c-3.2-1.1-6.5-1.9-9.9-2.4c0-.3 0-.6 0-.8C352 57.3 294.7 0 224 0l10.8 16.3c3.4 5 5.2 11 5.2 17c0 17-13.7 30.7-30.7 30.7L160 64c-35.3 0-64 28.7-64 64c0 .3 0 .6 0 .8c-3.3 .5-6.6 1.4-9.9 2.4l-20.5 6.8C26.4 151.2 0 187.9 0 229.2z" />
        <path d="M180.1 512l87.8 0 24-192-135.8 0 24 192zM123.9 320L64 320 96 512l51.9 0-24-192zm200.2 0l-24 192 51.9 0 32-192-59.9 0z" />
    </Icon>
);

export default Cupcake;