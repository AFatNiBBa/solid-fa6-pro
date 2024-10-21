
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lock-a` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-a?s=sharp-duotone-solid lock-a}
 * @preview ![lock-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lock-a.svg)
 */
const LockA: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 512l448 0 0-320-80 0 0-48C368 64.5 303.5 0 224 0S80 64.5 80 144l0 48L0 192zM128 448l80-192 32 0 80 192-34.7 0-16.7-40-89.3 0-16.7 40L128 448zm16-304c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48-160 0 0-48zm48.7 232l62.7 0L224 300.8 192.7 376z" />
        <path d="M268.7 408l16.7 40 34.7 0L240 256l-32 0L128 448l34.7 0 16.7-40 89.3 0zm-13.3-32l-62.7 0L224 300.8 255.3 376z" />
    </Icon>
);

export default LockA;