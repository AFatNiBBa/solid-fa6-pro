
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ufo-beam` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ufo-beam?s=sharp-duotone-solid ufo-beam}
 * @preview ![ufo-beam](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ufo-beam.svg)
 */
const UfoBeam: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M.3 492.2l9.7-21.9L90.4 289.5c14.2 5.2 29.7 9.8 46.4 13.9L53.9 489.7l-9.7 21.9L.3 492.2zM144 138.7c0-9.3 1-18.8 2.9-28.3C158.5 54.5 204.4 0 288 0s129.5 54.5 141.1 110.3c2 9.5 2.9 19 2.9 28.3c0 0-33.2 53.3-144 53.3s-144-53.3-144-53.3zM439.2 303.3c16.7-4 32.2-8.7 46.4-13.9l80.3 180.8 9.7 21.9-43.9 19.5-9.7-21.9L439.2 303.3z" />
        <path d="M432 138.7s-33.2 53.3-144 53.3s-144-53.3-144-53.3c0-9.3 1-18.8 2.9-28.3C59.2 129.5 0 166.1 0 208c0 61.9 128.9 112 288 112s288-50.1 288-112c0-41.9-59.2-78.5-146.9-97.7c2 9.5 2.9 19 2.9 28.3zM288 224l32 32-32 32-32-32 32-32zM64 208l32-32 32 32L96 240 64 208zm416-32l32 32-32 32-32-32 32-32z" />
    </Icon>
);

export default UfoBeam;