
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-triangle-square` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-triangle-square?s=duotone arrow-down-triangle-square}
 * @preview ![arrow-down-triangle-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-down-triangle-square.svg)
 */
const ArrowDownTriangleSquare: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M304 192c0 5.3 1.3 10.7 4 15.5c5.6 10.2 16.4 16.5 28 16.5l160 0c11.6 0 22.3-6.3 28-16.5c2.7-4.8 4-10.2 4-15.5c0-5.9-1.6-11.8-4.9-17l-80-128C437.3 37.7 427 32 416 32s-21.3 5.7-27.1 15l-80 128c-3.2 5.2-4.9 11.1-4.9 17zm16 144l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48z" />
        <path d="M160 480c9 0 17.5-3.8 23.6-10.4l88-96c11.9-13 11.1-33.3-2-45.2s-33.3-11.1-45.2 2L192 365.7 192 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 301.7L95.6 330.4c-11.9-13-32.2-13.9-45.2-2s-13.9 32.2-2 45.2l88 96C142.5 476.2 151 480 160 480z" />
    </Icon>
);

export default ArrowDownTriangleSquare;