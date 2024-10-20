
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ufo` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ufo?s=sharp-duotone-solid ufo}
 * @preview ![ufo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ufo.svg)
 */
const Ufo: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M144 237.1s51.8 50.9 176 50.9s176-50.9 176-50.9c0-8.3-.6-16.5-1.7-24.5C482.2 128.6 408.8 64 320 64s-162.2 64.6-174.3 148.6c-1.2 8-1.7 16.2-1.7 24.5z" />
        <path d="M320 288c124.2 0 176-50.9 176-50.9c0-8.3-.6-16.5-1.7-24.5C582 235.5 640 275 640 320c0 70.7-143.3 128-320 128S0 390.7 0 320c0-45 58-84.5 145.7-107.4c-1.2 8-1.7 16.2-1.7 24.5c0 0 51.8 50.9 176 50.9zm-32 88l32 32 32-32-32-32-32 32zM128 296L96 328l32 32 32-32-32-32zm416 32l-32-32-32 32 32 32 32-32z" />
    </Icon>
);

export default Ufo;