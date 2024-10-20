
import { Icon } from "../../index";

/**
 * A component that renders the `face-hand-yawn` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-hand-yawn?s=sharp-regular face-hand-yawn}
 * @preview ![face-hand-yawn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-hand-yawn.svg)
 */
const FaceHandYawn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 60.5-25.8 115-67.1 153l15 15-22.6 22.6-52.3 52.3C438.7 465.1 512 369.1 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 94.5 51.2 177 127.3 221.4c-9.8-18-15.3-38.6-15.3-60.5l0-10.7C72.6 368.2 48 315 48 256zm208-48c-52.5 0-95.1 42.1-96 94.4l24 0 21.7 0 51.7-51.7L280 228.1l22.6 22.6 9.4 9.4 16-16 10.1 10.1C321.3 226.5 290.8 208 256 208zm-14.3-84.3l-30-37.5-18.7 15-80 64-18.7 15 30 37.5 18.7-15 80-64 18.7-15zm47.3 15l80 64 18.7 15 30-37.5-18.7-15-80-64-18.7-15-30 37.5 18.7 15zM302.6 296L280 273.4l-11.3 11.3L184 369.4l0-15 0-20-40 0 0 20 0 29.6 0 20 0 12.8c0 52.6 42.6 95.2 95.2 95.2c25.2 0 49.5-10 67.3-27.9l48.8-48.8L366.6 424 344 401.4l-11.3 11.3-24 24-9.4-9.4 56-56L366.6 360 344 337.4l-11.3 11.3-56 56-9.4-9.4 72-72L350.6 312 328 289.4l-11.3 11.3-72 72-9.4-9.4 56-56L302.6 296z" />
    </Icon>
);

export default FaceHandYawn;