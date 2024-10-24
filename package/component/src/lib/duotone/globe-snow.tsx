
import { Icon, generic } from "../../index";

/**
 * A component that renders the `globe-snow` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-snow?s=duotone globe-snow}
 * @preview ![globe-snow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/globe-snow.svg)
 */
const GlobeSnow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224c0 71.4 33.4 135 85.4 176L192 400l0-48-64 0c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4L185.4 256 160 256c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l64-64c3.1-3.1 7.2-4.7 11.3-4.7s8.2 1.6 11.3 4.7l64 64c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9l-25.4 0 68.7 68.7c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9l-64 0 0 48 106.6 0c52-41 85.4-104.6 85.4-176C448 100.3 347.7 0 224 0S0 100.3 0 224zm96-16a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM256 80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm96 96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M235.3 164.7c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9l25.4 0-68.7 68.7c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9l64 0 0 48L85.4 400 21.7 473.4c-3.7 4.2-5.7 9.7-5.7 15.3C16 501.6 26.4 512 39.3 512l369.4 0c12.9 0 23.3-10.4 23.3-23.3c0-5.6-2-11-5.7-15.3L362.6 400 256 400l0-48 64 0c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4L262.6 256l25.4 0c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-64-64z" />
    </Icon>
);

export default GlobeSnow;