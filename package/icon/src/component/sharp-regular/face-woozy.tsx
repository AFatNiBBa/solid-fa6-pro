
import { Icon } from "../../index";

/**
 * A component that renders the `face-woozy` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-woozy?s=sharp-regular face-woozy}
 * @preview ![face-woozy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-woozy.svg)
 */
const FaceWoozy: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM368 208c0-35.3-14.3-64-32-64s-32 28.7-32 64s14.3 64 32 64s32-28.7 32-64zM213.8 247.3l23.3-5.8-11.6-46.6-23.3 5.8-64 16-23.3 5.8 11.6 46.6 23.3-5.8 64-16zm.4-139.7L187.6 89.8l-8.9 13.3c-23.2 34.8-58.4 53.2-71.7 57.7l-15.2 5.1 10.1 30.4 15.2-5.1c18.6-6.2 60.3-28.3 88.3-70.3l8.9-13.3zM385.8 360.1l16.1-17.8-35.5-32.3-16.1 17.8L319 362.3c-3.3 3.6-7.9 5.7-12.8 5.7c-3.5 0-6.9-1.1-9.8-3l-11.7-8.1c-24-16.5-54.7-19.4-81.4-7.7c-11.7 5.2-25.3 3.7-35.7-3.9l-9.4-6.9-19.3-14.2-28.4 38.7 19.3 14.2 9.4 6.9c24.2 17.8 56 21.2 83.4 9.1c11.4-5 24.5-3.8 34.8 3.3l11.7 8.1c10.9 7.5 23.8 11.5 37 11.5c18.4 0 36-7.8 48.3-21.4l31.3-34.5z" />
    </Icon>
);

export default FaceWoozy;