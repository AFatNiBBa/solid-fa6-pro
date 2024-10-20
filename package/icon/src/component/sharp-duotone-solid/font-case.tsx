
import { Icon, generic } from "../../index";

/**
 * A component that renders the `font-case` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font-case?s=sharp-duotone-solid font-case}
 * @preview ![font-case](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/font-case.svg)
 */
const FontCase: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M384 288l0 64c0 70.7 57.3 128 128 128c23.3 0 45.2-6.2 64-17.1l0 17.1 64 0 0-32 0-96 0-64 0-96 0-32-64 0 0 17.1c-18.8-10.9-40.7-17.1-64-17.1c-70.7 0-128 57.3-128 128zm64 0c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-64z" />
        <path d="M153 32l-7.3 21.8L2.6 480l67.5 0 37.6-112 136.6 0 37.6 112 67.5 0L206.3 53.8 199 32l-46 0zm69.8 272l-93.6 0L176 164.6 222.8 304z" />
    </Icon>
);

export default FontCase;