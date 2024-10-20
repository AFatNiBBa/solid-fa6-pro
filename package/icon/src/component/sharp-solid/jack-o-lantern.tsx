
import { Icon } from "../../index";

/**
 * A component that renders the `jack-o-lantern` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jack-o-lantern?s=sharp-solid jack-o-lantern}
 * @preview ![jack-o-lantern](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/jack-o-lantern.svg)
 */
const JackOLantern: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 96c-18.1 0-35.5 2.7-51.9 7.8L288 0l64 32 0 76c-19.8-7.7-41.4-12-64-12zm146 77.7c-10.9-16.1-24.3-30.3-39.8-42c9.6-2.4 19.6-3.7 29.8-3.7c83.9 0 152 86 152 192s-68.1 192-152 192c-24.4 0-47.5-7.3-68-20.2c-20.5 12.9-43.6 20.2-68 20.2s-47.5-7.3-68-20.2c-20.5 12.9-43.6 20.2-68 20.2C68.1 512 0 426 0 320S68.1 128 152 128c10.2 0 20.1 1.3 29.8 3.7c-15.4 11.7-28.9 25.9-39.8 42c41.4-28.8 91.7-45.7 146-45.7s104.6 16.9 146 45.7zM208 208l-48 80 96 0-48-80zm160 0l-48 80 96 0-48-80zm0 228.2l0-36.2 48 0 0 12.4c53.8-37.9 64-92.4 64-92.4s-80 48-192 48l0 32-48 0 0-34.9C153.8 354.7 96 320 96 320s10.2 54.6 64 92.4l0-12.4 48 0 0 36.2c22.1 7.3 48.5 11.8 80 11.8s57.9-4.5 80-11.8z" />
    </Icon>
);

export default JackOLantern;