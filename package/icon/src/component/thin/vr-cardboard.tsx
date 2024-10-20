
import { Icon } from "../../index";

/**
 * A component that renders the `vr-cardboard` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vr-cardboard?s=thin vr-cardboard}
 * @preview ![vr-cardboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/vr-cardboard.svg)
 */
const VrCardboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 80L64 80c-26.5 0-48 21.5-48 48l0 256c0 26.5 21.5 48 48 48l136.4 0c18.2 0 34.8-10.3 42.9-26.5l39.2-78.3C289.6 313 304.1 304 320 304s30.4 9 37.5 23.2l39.2 78.3c8.1 16.3 24.8 26.5 42.9 26.5L576 432c26.5 0 48-21.5 48-48l0-256c0-26.5-21.5-48-48-48zM64 64l512 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-136.4 0c-24.2 0-46.4-13.7-57.2-35.4l-39.2-78.3c-4.4-8.8-13.4-14.3-23.2-14.3s-18.8 5.5-23.2 14.3l-39.2 78.3c-10.8 21.7-33 35.4-57.2 35.4L64 448c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64zM176 304a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-144a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm352 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-144 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z" />
    </Icon>
);

export default VrCardboard;