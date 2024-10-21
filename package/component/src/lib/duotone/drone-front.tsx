
import { Icon, generic } from "../../index";

/**
 * A component that renders the `drone-front` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drone-front?s=duotone drone-front}
 * @preview ![drone-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/drone-front.svg)
 */
const DroneFront: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 136c0 13.3 10.7 24 24 24l72 0 64 0 104 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-108.3 0-55.4 0L24 112c-13.3 0-24 10.7-24 24zm352 0c0 13.3 10.7 24 24 24l104 0 64 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-76.3 0-55.4 0L376 112c-13.3 0-24 10.7-24 24z" />
        <path d="M160 160l-64 0 0 32 0 64c0 12.6 7.4 24.1 19 29.2l56.5 25.1c-17.8 21.5-27.5 48.5-27.5 76.4l0 5.2c0 13.3 10.7 24 24 24s24-10.7 24-24l0-5.2c0-16.8 5.9-33.2 16.7-46.1l8.4-10.1L259 349.2c4.1 1.8 8.5 2.8 13 2.8l96 0c4.5 0 8.9-.9 13-2.8l41.9-18.6 8.4 10.1c10.8 12.9 16.7 29.3 16.7 46.1l0 5.2c0 13.3 10.7 24 24 24s24-10.7 24-24l0-5.2c0-27.9-9.7-54.9-27.5-76.4L525 285.2c11.6-5.1 19-16.6 19-29.2l0-64 0-32-64 0 0 32 0 43.2-17.8 7.9-40.6-23.7C390.7 201.5 355.7 192 320 192s-70.7 9.5-101.6 27.5l-40.6 23.7L160 235.2l0-43.2 0-32zm324.3-48l55.4 0c-5.5-9.6-15.9-16-27.7-16s-22.2 6.4-27.7 16zM128 96c-11.8 0-22.2 6.4-27.7 16l55.4 0c-5.5-9.6-15.9-16-27.7-16z" />
    </Icon>
);

export default DroneFront;