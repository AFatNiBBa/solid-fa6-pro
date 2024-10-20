
import { Icon } from "../../index";

/**
 * A component that renders the `globe-snow` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-snow?s=solid globe-snow}
 * @preview ![globe-snow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/globe-snow.svg)
 */
const GlobeSnow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 224c0 62.7-25.7 119.3-67.2 160L256 384l0-32 64 0c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4L262.6 256l25.4 0c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9l25.4 0-68.7 68.7c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9l64 0 0 32L67.2 384C25.7 343.3 0 286.7 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224zM256 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm80 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM96 208a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM20.3 474.2L61.1 416l325.8 0 40.8 58.2c5.1 7.3 5.8 16.9 1.6 24.8S416.9 512 408 512L40 512c-8.9 0-17.2-5-21.3-12.9s-3.5-17.5 1.6-24.8z" />
    </Icon>
);

export default GlobeSnow;