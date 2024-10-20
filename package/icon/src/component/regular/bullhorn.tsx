
import { Icon } from "../../index";

/**
 * A component that renders the `bullhorn` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullhorn?s=regular bullhorn}
 * @preview ![bullhorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bullhorn.svg)
 */
const Bullhorn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 73.9L421.3 84.6C364.5 141.4 288.1 174 208 175.9c0 0 0 .1 0 .1l0 128s0 0 0 0c0 0 0 .1 0 .1c80.1 1.9 156.5 34.5 213.3 91.3L432 406.1l0-332.1zM160 128l40.7 0c70 0 137.2-27.8 186.7-77.3l38-38C445.5-7.5 480 6.8 480 35.3l0 144.3c18.6 8.8 32 32.5 32 60.4s-13.4 51.6-32 60.4l0 144.3c0 28.5-34.5 42.8-54.6 22.6l-38-38c-47.8-47.8-112-75.4-179.4-77.2L208 456c0 30.9-25.1 56-56 56l-32 0c-30.9 0-56-25.1-56-56l0-104c-35.3 0-64-28.7-64-64l0-96c0-35.3 28.7-64 64-64l96 0zM112 352l0 104c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-104-48 0zM64 176c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16c0 0 0 0 0 0l48 0 48 0 0-128-96 0z" />
    </Icon>
);

export default Bullhorn;