
import { Icon } from "../../index";

/**
 * A component that renders the `circle-camera` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-camera?s=thin circle-camera}
 * @preview ![circle-camera](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-camera.svg)
 */
const CircleCamera: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM206.6 136.8L195.1 160 168 160c-22.1 0-40 17.9-40 40l0 112c0 22.1 17.9 40 40 40l176 0c22.1 0 40-17.9 40-40l0-112c0-22.1-17.9-40-40-40l-27.1 0-11.6-23.2c-2.7-5.4-8.3-8.8-14.3-8.8l-70.1 0c-6.1 0-11.6 3.4-14.3 8.8zm14.3 7.2l70.1 0 13.8 27.6c1.4 2.7 4.1 4.4 7.2 4.4l32 0c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24l32 0c3 0 5.8-1.7 7.2-4.4L220.9 144zM256 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-32-48a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default CircleCamera;