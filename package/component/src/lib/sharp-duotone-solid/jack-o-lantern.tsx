
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jack-o-lantern` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jack-o-lantern?s=sharp-duotone-solid jack-o-lantern}
 * @preview ![jack-o-lantern](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/jack-o-lantern.svg)
 */
const JackOLantern: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 320C0 426 68.1 512 152 512c24.4 0 47.5-7.3 68-20.2c20.5 12.9 43.6 20.2 68 20.2s47.5-7.3 68-20.2c20.5 12.9 43.6 20.2 68 20.2c83.9 0 152-86 152-192s-68.1-192-152-192c-10.2 0-20.1 1.3-29.8 3.7c15.4 11.7 28.9 25.9 39.8 42C392.6 144.9 342.3 128 288 128s-104.6 16.9-146 45.7c10.9-16.1 24.3-30.3 39.8-42c-9.6-2.4-19.6-3.7-29.8-3.7C68.1 128 0 214 0 320zm96 0s14.5 8.7 39.7 18.6s61.2 21.2 104.3 26.4l0 34.9 48 0 0-32c112 0 192-48 192-48s-10.2 54.6-64 92.4l0-12.4-48 0 0 36.2c-22.1 7.3-48.5 11.8-80 11.8s-57.9-4.5-80-11.8l0-36.2-48 0 0 12.4C106.2 374.6 96 320 96 320zm64-32l48-80 48 80-96 0zm160 0l48-80 48 80-96 0z" />
        <path d="M236.1 103.8C252.5 98.7 269.9 96 288 96c22.6 0 44.2 4.3 64 12l0-76L288 0 236.1 103.8zM160 288l96 0-48-80-48 80zm160 0l96 0-48-80-48 80zm96 124.4c53.8-37.9 64-92.4 64-92.4s-80 48-192 48l0 32-48 0 0-34.9C153.8 354.7 96 320 96 320s10.2 54.6 64 92.4l0-12.4 48 0 0 36.2c22.1 7.3 48.5 11.8 80 11.8s57.9-4.5 80-11.8l0-36.2 48 0 0 12.4z" />
    </Icon>
);

export default JackOLantern;