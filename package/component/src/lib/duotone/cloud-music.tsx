
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-music` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-music?s=duotone cloud-music}
 * @preview ![cloud-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cloud-music.svg)
 */
const CloudMusic: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336zm192 32c0-22.1 21.5-40 48-40c5.6 0 11 .8 16 2.3l0-87.2c0-13.3 8.3-25.3 20.8-30l96-36c20.9-7.8 43.2 7.6 43.2 30L416 336c0 22.1-21.5 40-48 40s-48-17.9-48-40s21.5-40 48-40c5.6 0 11 .8 16 2.3l0-59.2-96 36 0 92.9c0 22.1-21.5 40-48 40s-48-17.9-48-40z" />
        <path d="M372.8 177.1c20.9-7.8 43.2 7.6 43.2 30L416 336s0 0 0 0c0 22.1-21.5 40-48 40s-48-17.9-48-40s21.5-40 48-40c5.6 0 11 .8 16 2.3l0-59.2-96 36 0 92.9s0 0 0 0c0 22.1-21.5 40-48 40s-48-17.9-48-40s21.5-40 48-40c5.6 0 11 .8 16 2.3l0-87.2c0-13.3 8.3-25.3 20.8-30l96-36z" />
    </Icon>
);

export default CloudMusic;