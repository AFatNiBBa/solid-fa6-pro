
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-bars-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-slash?s=duotone signal-bars-slash}
 * @preview ![signal-bars-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/signal-bars-slash.svg)
 */
const SignalBarsSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 432l0 32c0 26.5 21.5 48 48 48s48-21.5 48-48l0-32c0-26.5-21.5-48-48-48s-48 21.5-48 48zM192 304l0 160c0 26.5 21.5 48 48 48s48-21.5 48-48l0-141.1-74.7-58.8C200.5 272.7 192 287.4 192 304zM352 176l0 74.6c32 25.1 64 50.2 96 75.2L448 176c0-26.5-21.5-48-48-48s-48 21.5-48 48zm0 197.3l0 90.7c0 26.5 21.5 48 48 48s48-21.5 48-48l0-15-96-75.6zM512 48l0 328c32 25.1 64 50.2 96 75.2L608 48c0-26.5-21.5-48-48-48s-48 21.5-48 48zm47.7 464l.7 0-.3 0-.3 0z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default SignalBarsSlash;