
import { Icon } from "../../index";

/**
 * A component that renders the `hammer` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer?s=sharp-light hammer}
 * @preview ![hammer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hammer.svg)
 */
const Hammer: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M504 136l-22.6-22.6L405.5 37.5C381.5 13.5 348.9 0 315 0L291.5 0c-23.2 0-46 6.3-65.9 18.2L208.5 28.5 176 48l33.9 17L272 96l0 48 89.4 89.4L384 256l16-16 22.6 22.6 26.7 26.7 3.3 3.3-16 16 22.6 22.6 112-112-22.6-22.6-8 8-3.3-3.3-26.7-26.7L488 152l16-16zm-45.3 0l-16 16 22.6 22.6L514.7 224 472 266.7l-49.4-49.4L400 194.7l-16 16-80-80L304 96l0-19.8-17.7-8.8L242.5 45.4c14.8-8.8 31.8-13.4 49-13.4L315 32c25.5 0 49.9 10.1 67.9 28.1L458.7 136zM24 394.7L0 416l22.7 22.7 50.7 50.7L96 512l21.3-24L330.7 248 308 225.3 94.6 465.4l-48-48L286.7 204 264 181.3 24 394.7z" />
    </Icon>
);

export default Hammer;