
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mountain-city` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain-city?s=duotone mountain-city}
 * @preview ![mountain-city](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mountain-city.svg)
 */
const MountainCity: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 48l0 92.1 71.4 118.4c2.5-1.6 5.4-2.5 8.6-2.5l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-3.5 0 73.8 122.4c12.4 20.6 12.9 46.3 1.2 67.3c-.4 .8-.9 1.6-1.4 2.3L592 512c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-24 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-40 0 0-144c0-26.5-21.5-48-48-48L336 0c-26.5 0-48 21.5-48 48zm64 32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm0 96c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm160 96c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm0 96c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32z" />
        <path d="M150.4 310.8L175 352l48-64 60.8 0L224 188.9 150.4 310.8zM224 128c12 0 23.1 6.3 29.4 16.7L442.9 458.9c6.5 10.8 6.7 24.3 .7 35.3s-17.6 17.8-30.1 17.8L34.5 512c-12.5 0-24-6.8-30.1-17.8s-5.8-24.5 .7-35.3L194.6 144.7C200.9 134.3 212 128 224 128z" />
    </Icon>
);

export default MountainCity;