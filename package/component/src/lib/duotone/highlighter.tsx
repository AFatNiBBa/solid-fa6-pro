
import { Icon, generic } from "../../index";

/**
 * A component that renders the `highlighter` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/highlighter?s=duotone highlighter}
 * @preview ![highlighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/highlighter.svg)
 */
const Highlighter: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M61.3 400c0 3.5 .6 7 1.7 10.4c1.5 4.5 4.1 8.7 7.6 12.2c16.9 16.9 33.8 33.8 50.7 50.7c3.6 3.6 7.8 6.1 12.2 7.6c3.4 1.2 6.9 1.7 10.4 1.7c8.2 0 16.4-3.1 22.6-9.4L224 416l71.7 0c15.3 0 29.6-7.2 38.6-19.5l26.3-35.8L183.3 183.3l-35.7 26.3c-12.3 9-19.5 23.4-19.5 38.6l0 71.7c-19.1 19.1-38.2 38.3-57.4 57.4c-6.2 6.2-9.4 14.4-9.4 22.6z" />
        <path d="M360.7 360.7L183.3 183.3 420.6 8.4C428 2.9 437 0 446.2 0c11.4 0 22.4 4.5 30.5 12.6l54.8 54.8c8.1 8.1 12.6 19 12.6 30.5c0 9.2-2.9 18.2-8.4 25.6L360.7 360.7zM7 466.3l56-56c1.5 4.5 4.1 8.7 7.6 12.2l50.7 50.7c3.6 3.6 7.8 6.1 12.2 7.6l-24 24c-4.5 4.5-10.6 7-17 7L24 512c-13.3 0-24-10.7-24-24l0-4.7c0-6.4 2.5-12.5 7-17z" />
    </Icon>
);

export default Highlighter;