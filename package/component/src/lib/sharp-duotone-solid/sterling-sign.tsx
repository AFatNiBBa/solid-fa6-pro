
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sterling-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sterling-sign?s=sharp-duotone-solid sterling-sign}
 * @preview ![sterling-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sterling-sign.svg)
 */
const SterlingSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 64 48 0 0-64L0 224zm112 0l0 64 144 0 0-64-144 0z" />
        <path d="M173.9 96c-34.2 0-61.9 27.7-61.9 61.9L112 344l0 7.6-3.4 6.8L79.8 416 288 416l32 0 0 64-32 0L32 480 0 480l0-32 0-8 0-7.6 3.4-6.8L48 336.4l0-178.5C48 88.4 104.4 32 173.9 32c16 0 31.9 3.1 46.8 9l63.2 25.3 29.7 11.9-23.8 59.4-29.7-11.9-63.2-25.3c-7.3-2.9-15.1-4.4-23-4.4z" />
    </Icon>
);

export default SterlingSign;