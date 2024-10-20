
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-fancy` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-fancy?s=sharp-duotone-solid pen-fancy}
 * @preview ![pen-fancy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pen-fancy.svg)
 */
const PenFancy: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M9.1 480.3l88-88c-.7-2.6-1.1-5.4-1.1-8.3c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1l-88 88L224 448c16-42.7 32-85.3 48-128c-26.7-26.7-53.3-53.3-80-80c-42.7 16-85.3 32-128 48L9.1 480.3z" />
        <path d="M416 0L192 240l80 80L512 96 416 0z" />
    </Icon>
);

export default PenFancy;