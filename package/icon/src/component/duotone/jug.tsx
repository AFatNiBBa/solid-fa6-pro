
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jug` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jug?s=duotone jug}
 * @preview ![jug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/jug.svg)
 */
const Jug: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 288c128 0 256 0 384 0l0 128L32 416l0-128zM128 32c0-17.7 14.3-32 32-32L288 0c17.7 0 32 14.3 32 32c0 11.8-6.4 22.2-16 27.7c-4.7 2.7-10.2 4.3-16 4.3c-42.7 0-85.3 0-128 0c-5.8 0-11.3-1.6-16-4.3c-9.6-5.5-16-15.9-16-27.7z" />
        <path d="M144 59.7L144 85c0 7.1-2.4 14-6.7 19.6L59 205.3c-17.5 22.5-27 50.1-27 78.6l0 4.1 384 0 0-4.1c0-17.4-3.5-34.5-10.3-50.3C430.6 222.3 448 197.2 448 168c0-39.8-32.2-72-72-72c-21.2 0-40.3 9.2-53.5 23.8l-11.8-15.1C306.4 99 304 92.1 304 85l0-25.3c-4.7 2.7-10.2 4.3-16 4.3L160 64c-5.8 0-11.3-1.6-16-4.3zM32 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-32L32 416l0 32zM378.6 191.9l-25.1-32.2c3.4-9.1 12.2-15.6 22.5-15.6c13.3 0 24 10.7 24 24c0 12.4-9.4 22.6-21.4 23.9z" />
    </Icon>
);

export default Jug;