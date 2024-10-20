
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hat-winter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-winter?s=sharp-duotone-solid hat-winter}
 * @preview ![hat-winter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hat-winter.svg)
 */
const HatWinter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416l32 0 448 0 32 0 0 96L0 512l0-96zM160 96l28.6-27.9-.5-40 40 .5L256 0l27.9 28.6 40-.5-.5 40L352 96l-28.6 27.9c.1 10.5 .2 20.9 .4 31.2c0 3 .1 5.9 .1 8.8c-13.3-.2-26.6-.3-40-.5c-9.3 9.5-18.6 19.1-27.9 28.6c-9.3-9.5-18.6-19.1-27.9-28.6c-13.3 .2-26.6 .3-40 .5l.1-8.8c.1-10.4 .2-20.8 .4-31.2L160 96z" />
        <path d="M188.2 155.1c-67 23.8-105.5 82-127.5 137.4l18.7 9.4 48.6-27.8 7.9-4.5 7.9 4.5 48.6 27.8 56.3-28.2 7.2-3.6 7.2 3.6 56.3 28.2 48.6-27.8 7.9-4.5 7.9 4.5 48.6 27.8 18.7-9.4c-22-55.4-60.5-113.6-127.5-137.4l.1 8.8-40-.5L256 192l-27.9-28.6-40 .5 .1-8.8zM32 416l448 0s-2.5-42-18.1-93.1l-22.7 11.4-7.7 3.8-7.4-4.2L376 306.4l-48.1 27.5-7.4 4.2-7.7-3.8L256 305.9l-56.8 28.4-7.7 3.8-7.4-4.2L136 306.4 87.9 333.9l-7.4 4.2-7.7-3.8L50.1 322.9C34.5 374 32 416 32 416z" />
    </Icon>
);

export default HatWinter;