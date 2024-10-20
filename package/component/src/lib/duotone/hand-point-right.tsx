
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-point-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-point-right?s=duotone hand-point-right}
 * @preview ![hand-point-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-point-right.svg)
 */
const HandPointRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 226.3L0 288c0 88.4 71.6 160 160 160l8.6 0c-5.4-9.4-8.6-20.3-8.6-32c0-27.9 17.9-51.7 42.8-60.4C196 345.4 192 333.2 192 320c0-11.7 3.1-22.6 8.6-32l-.6 0c-39.8 0-72-32.2-72-72l0-56c0-8.8 7.2-16 16-16s16 7.2 16 16l0 56c0 22.1 17.9 40 40 40s40-17.9 40-40l0-88c0-35.3-28.7-64-64-64l-27 0c-33.9 0-66.5 13.5-90.5 37.5L46.9 113.1C16.9 143.1 0 183.8 0 226.3zM272 96l0 64 208 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L272 96z" />
        <path d="M352 192c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0zm-32 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c17.7 0 32 14.3 32 32z" />
    </Icon>
);

export default HandPointRight;