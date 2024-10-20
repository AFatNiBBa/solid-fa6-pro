
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tomato` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tomato?s=duotone tomato}
 * @preview ![tomato](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tomato.svg)
 */
const Tomato: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 304C0 434.9 114.6 512 256 512s256-77.1 256-208c0-75.5-38.1-133-97.5-168.3c-2.8 5-8.1 8.3-14 8.3c-11.5 0-23.1 0-34.6 0c5.1 7.7 10.3 15.4 15.4 23.1c3.9 5.9 3.5 13.7-1 19.1s-12.1 7.3-18.6 4.5L256 145.4c-35.2 15.1-70.5 30.2-105.7 45.3c-6.5 2.8-14.1 1-18.5-4.4c-4.6-5.5-5-13.3-1.1-19.2c5.1-7.7 10.3-15.4 15.4-23.1c-11.4 0-22.7 0-34.1 0c-.8 0-1.5-.1-2.2-.2s-1.4-.3-2.1-.5c-1.4-.4-2.7-1-3.9-1.7c-2.4-1.5-4.5-3.6-5.8-6.2C38.2 170.7 0 228.4 0 304z" />
        <path d="M252.6 11.7C245.8 .3 231-3.4 219.7 3.4s-15.1 21.6-8.2 32.9l10.3 17.2c5 8.4 8.3 17.6 9.6 27.2c-46.3 3-89.6 14.3-126.5 32.9c-6.6 3.3-10.1 10.8-8.4 18s8.2 12.3 15.6 12.3l34.1 0-15.4 23.1c-3.9 5.9-3.5 13.7 1 19.1s12.1 7.3 18.6 4.5L256 145.4l105.7 45.3c6.5 2.8 14.1 1 18.6-4.5s4.9-13.2 1-19.1L365.9 144l34.6 0c7.4 0 13.8-5.1 15.6-12.3s-1.7-14.6-8.3-18c-37.5-19-81.3-30.2-128.2-33c-1.5-18.3-7.2-36-16.7-51.8L252.6 11.7z" />
    </Icon>
);

export default Tomato;