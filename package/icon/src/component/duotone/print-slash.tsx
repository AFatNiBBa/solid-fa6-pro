
import { Icon, generic } from "../../index";

/**
 * A component that renders the `print-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print-slash?s=duotone print-slash}
 * @preview ![print-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/print-slash.svg)
 */
const PrintSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 256l0 96c0 17.7 14.3 32 32 32l32 0 0 64c0 35.3 28.7 64 64 64l256 0c20.1 0 38.1-9.3 49.8-23.8l-51-40.2L192 448l0-64 0-16 0-16 132.9 0L122.2 192.3C89.6 195.2 64 222.6 64 256zM128 64l0 11 64 50.2L192 64l226.7 0L448 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L464 18.7C452 6.7 435.7 0 418.7 0L192 0c-35.3 0-64 28.7-64 64zM277.3 192c81.7 64 163.3 128 245 192l21.8 0c17.7 0 32-14.3 32-32l0-96c0-35.3-28.7-64-64-64l-234.7 0zM520 272a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default PrintSlash;