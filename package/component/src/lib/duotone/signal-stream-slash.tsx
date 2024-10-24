
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-stream-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-stream-slash?s=duotone signal-stream-slash}
 * @preview ![signal-stream-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/signal-stream-slash.svg)
 */
const SignalStreamSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 68.1 23.7 130.7 63.2 180c6.3 7.9 15.6 12 25 12c7 0 14.1-2.3 20-7c13.8-11.1 16-31.2 5-45C82.4 357.6 64 309 64 256c0-33.4 7.3-65.1 20.4-93.5L33 122C11.9 162 0 207.6 0 256zm112 0c0 45.1 17 86.2 44.8 117.3c11.8 13.2 32 14.3 45.2 2.5s14.3-32 2.5-45.2c-17.8-19.8-28.5-46-28.5-74.7c0-6.8 .6-13.5 1.8-19.9l-54.3-42.8C116.1 212.8 112 233.9 112 256zm175.5-56c18.4 14.4 36.7 28.8 55.1 43.2c-5.8-24.7-28-43.2-54.5-43.2l-.5 0zm84-18.7c17.8 19.8 28.5 46 28.5 74.7c0 10.1-1.3 19.9-3.8 29.2c17.7 13.9 35.3 27.7 53 41.6c9.5-21.7 14.8-45.6 14.8-70.8c0-45.1-17-86.2-44.8-117.3c-11.8-13.2-32-14.3-45.2-2.5s-14.3 32-2.5 45.2zM462.9 116c30.7 38.4 49.1 87 49.1 140c0 36.4-8.7 70.8-24.1 101.1c17 13.4 34.1 26.7 51.1 40.1C562.6 355.5 576 307.3 576 256c0-68.1-23.7-130.7-63.2-180c-11.1-13.8-31.2-16-45-5s-16 31.2-5 45z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default SignalStreamSlash;