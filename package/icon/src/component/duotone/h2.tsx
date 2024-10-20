
import { Icon, generic } from "../../index";

/**
 * A component that renders the `h2` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h2?s=duotone h2}
 * @preview ![h2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/h2.svg)
 */
const H2: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 256 0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 192 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 224 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96z" />
        <path d="M491.5 128c-15.3 0-30.1 5.5-41.7 15.4l-29 24.9c-13.4 11.5-33.6 9.9-45.1-3.5s-9.9-33.6 3.5-45.1l29-24.9C431.4 74.9 461 64 491.5 64l4.5 0c70.7 0 128 57.3 128 128l0 5.8c0 35.9-15.1 70.1-41.5 94.4L482.3 384 608 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-208 0c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L539.2 244.9c13.2-12.1 20.8-29.2 20.8-47.2l0-5.8c0-35.3-28.7-64-64-64l-4.5 0z" />
    </Icon>
);

export default H2;