
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lira-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lira-sign?s=sharp-duotone-solid lira-sign}
 * @preview ![lira-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lira-sign.svg)
 */
const LiraSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 192l0 64 48 0 0-64L0 192zm0 96l0 64 40.2 0c2.6-5.2 5.2-10.4 7.8-15.6L48 288 0 288zm112-96l0 64 144 0 0-64-144 0zm0 96l0 56 0 7.6-.2 .4L256 352l0-64-144 0z" />
        <path d="M173.9 96c-34.2 0-61.9 27.7-61.9 61.9L112 344l0 7.6-3.4 6.8L79.8 416 288 416l32 0 0 64-32 0L32 480 0 480l0-32 0-8 0-7.6 3.4-6.8L48 336.4l0-178.5C48 88.4 104.4 32 173.9 32c16 0 31.9 3.1 46.8 9l63.2 25.3 29.7 11.9-23.8 59.4-29.7-11.9-63.2-25.3c-7.3-2.9-15.1-4.4-23-4.4z" />
    </Icon>
);

export default LiraSign;