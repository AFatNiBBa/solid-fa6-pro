
import { Icon, generic } from "../../index";

/**
 * A component that renders the `screwdriver-wrench` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver-wrench?s=sharp-duotone-solid screwdriver-wrench}
 * @preview ![screwdriver-wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/screwdriver-wrench.svg)
 */
const ScrewdriverWrench: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416l96 96L233.4 374.6 210.7 352l22.6-22.6 8.4-8.4-73.4-73.4L0 416zm70.1-8L104 374.1 137.9 408 104 441.9 70.1 408zM224 144c0 .3 0 .5 0 .8l97 97 8.4-8.4L352 210.7l22.6 22.6 45.1 45.1c54-20.8 92.3-73.1 92.3-134.4c0-19-3.7-37.1-10.3-53.7L416 176l-80 0 0-80 85.7-85.7C405.1 3.7 387 0 368 0C288.5 0 224 64.5 224 144z" />
        <path d="M158.1 192L287 321l-31 31L416 512l96-96L352 256l-31 31-129-129L192 96 64 0 0 64 96 192l62.1 0z" />
    </Icon>
);

export default ScrewdriverWrench;