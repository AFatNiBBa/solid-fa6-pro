
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sword-laser-alt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sword-laser-alt?s=sharp-duotone-solid sword-laser-alt}
 * @preview ![sword-laser-alt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sword-laser-alt.svg)
 */
const SwordLaserAlt: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M197.1 256L480 0l32 32L309.3 256l-112.3 0z" />
        <path d="M61.7 493.7L80 512l98.3-98.3L160 395.3 61.7 493.7zM50.3 482.3L148.7 384 128 363.3 29.7 461.7l20.7 20.7zm-32-32L116.7 352 98.3 333.7 0 432l18.3 18.3zm91.3-128l24 24 32 32 24 24L336 256l-160 0-66.3 66.3z" />
    </Icon>
);

export default SwordLaserAlt;