
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-fancy` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-fancy?s=duotone pen-fancy}
 * @preview ![pen-fancy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pen-fancy.svg)
 */
const PenFancy: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1.7 487.7l95.4-95.4c-.7-2.6-1.1-5.4-1.1-8.3c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1L24.3 510.3 211.2 458c11.3-3.2 19.9-12.2 22.6-23.6l21.9-94.7c.1-.6 .3-1.1 .4-1.7c-27.3-27.3-54.6-54.6-81.9-81.9c-.6 .1-1.1 .3-1.7 .4L77.7 278.3c-11.4 2.6-20.5 11.3-23.6 22.6L1.7 487.7z" />
        <path d="M373.5 27.1C388.5 9.9 410.2 0 433 0c43.6 0 79 35.4 79 79c0 22.8-9.9 44.6-27.1 59.6L256 337.9s0 0 0 0s0 0 0 0L174.1 256 373.5 27.1z" />
    </Icon>
);

export default PenFancy;