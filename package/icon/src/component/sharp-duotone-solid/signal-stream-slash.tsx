
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-stream-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-stream-slash?s=sharp-duotone-solid signal-stream-slash}
 * @preview ![signal-stream-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/signal-stream-slash.svg)
 */
const SignalStreamSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 67.4 23.2 129.4 61.9 178.5l50.2-39.7C82 356.6 64 308.5 64 256c0-33.4 7.3-65.1 20.4-93.5L33 122C11.9 162 0 207.7 0 256zm112 0c0 41.2 14.2 79.1 37.9 109.1l50.2-39.7C185 306.3 176 282.2 176 256c0-6.8 .6-13.5 1.8-19.9l-54.3-42.8C116.1 212.8 112 233.9 112 256zm175-56c18.5 14.4 37 28.8 55.6 43.1c-5.8-24.7-28-43.1-54.5-43.1l-1 0zm89-13.4C391 205.7 400 229.8 400 256c0 10-1.3 19.7-3.7 28.9l53.2 41.3c9.4-21.5 14.6-45.2 14.6-70.2c0-41.2-14.2-79.1-37.9-109.1l-50.2 39.7zm87.9-69.4C494 155.4 512 203.5 512 256c0 36.1-8.5 70.2-23.7 100.3c17.1 13.3 34.2 26.6 51.3 39.8C562.8 354.7 576 306.9 576 256c0-67.4-23.2-129.4-61.9-178.5l-50.2 39.7z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default SignalStreamSlash;