
import { Icon, generic } from "../../index";

/**
 * A component that renders the `superscript` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/superscript?s=duotone superscript}
 * @preview ![superscript](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/superscript.svg)
 */
const Superscript: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96C0 78.3 14.3 64 32 64l32 0c10.4 0 20.2 5.1 26.2 13.6L176 200.2 261.8 77.6c6-8.6 15.8-13.6 26.2-13.6l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-15.3 0L215.1 256l89.6 128 15.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-10.4 0-20.2-5.1-26.2-13.6L176 311.8 90.2 434.4C84.2 442.9 74.4 448 64 448l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l15.3 0 89.6-128L47.3 128 32 128C14.3 128 0 113.7 0 96z" />
        <path d="M464.8 4.8C474.3 10.6 480 20.9 480 32l0 128c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-80c-11.7 0-23-6.5-28.6-17.7c-7.9-15.8-1.5-35 14.3-42.9l32-16c9.9-5 21.7-4.4 31.1 1.4z" />
    </Icon>
);

export default Superscript;