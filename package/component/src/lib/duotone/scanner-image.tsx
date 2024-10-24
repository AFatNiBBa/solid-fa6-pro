
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scanner-image` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-image?s=duotone scanner-image}
 * @preview ![scanner-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/scanner-image.svg)
 */
const ScannerImage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64c-32 0-64 0-96 0L64 288c-35.3 0-64 28.7-64 64zm128 32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M35.8 48.9c8.3-15.6 27.7-21.5 43.3-13.2L525.2 273.7c20.9 11.2 36.6 29.4 44.7 50.9C559.6 303 537.5 288 512 288l-96 0L48.9 92.2C33.3 83.9 27.4 64.5 35.8 48.9zM96 352a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default ScannerImage;