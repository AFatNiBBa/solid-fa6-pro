
import { Icon, generic } from "../../index";

/**
 * A component that renders the `print-magnifying-glass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print-magnifying-glass?s=duotone print-magnifying-glass}
 * @preview ![print-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/print-magnifying-glass.svg)
 */
const PrintMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 256l0 96c0 17.7 14.3 32 32 32l32 0 0 64c0 35.3 28.7 64 64 64l256 0c24.4 0 45.6-13.7 56.4-33.8l-6.3-6.3c-15.8 5.2-32.6 8-50.2 8c-36 0-69.3-11.9-96-32l-160 0 0-64 0-16 0-16 99.2 0c-2.1-10.3-3.2-21-3.2-32c0-52.3 25.1-98.8 64-128l-224 0c-35.3 0-64 28.7-64 64zM128 64l0 96 64 0 0-96 226.7 0L448 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L464 18.7C452 6.7 435.7 0 418.7 0L192 0c-35.3 0-64 28.7-64 64z" />
        <path d="M528 320.2a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM519.9 426c-20.5 14-45.3 22.1-71.9 22.1c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9L633 471.2c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L519.9 426z" />
    </Icon>
);

export default PrintMagnifyingGlass;