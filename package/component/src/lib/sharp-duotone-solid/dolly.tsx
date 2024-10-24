
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dolly` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly?s=sharp-duotone-solid dolly}
 * @preview ![dolly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dolly.svg)
 */
const Dolly: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M160 416a96 96 0 1 0 191.9 0A96 96 0 1 0 160 416zm74.9-311.9l61.9 190.5c10.9 3.6 21.1 8.7 30.4 15l189.9-61.7-69.2-213L371.8 59.6c6.6 20.3 13.2 40.6 19.8 60.9c-20.3 6.6-40.6 13.2-60.9 19.8L311 79.4c-25.4 8.2-50.7 16.5-76.1 24.7z" />
        <path d="M0 0L32 0l96 0 23.1 0 7.3 21.9L257.7 320c-.6 0-1.2 0-1.7 0c-22.2 0-42.7 7.6-59 20.2L104.9 64 32 64 0 64 0 0zM352 416c0-22.2-7.6-42.7-20.2-59l202.1-67.4 30.4-10.1 20.2 60.7-30.4 10.1L352 417.7c0-.6 0-1.2 0-1.7zM371.8 59.6l19.8 60.9-60.9 19.8L311 79.4l60.9-19.8z" />
    </Icon>
);

export default Dolly;