
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-tongue-wink` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-tongue-wink?s=duotone face-grin-tongue-wink}
 * @preview ![face-grin-tongue-wink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-grin-tongue-wink.svg)
 */
const FaceGrinTongueWink: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 368.9 73.1 464.7 174.5 498.8C165.3 484 160 466.6 160 448l0-47.3c-24-17.5-43.1-41.4-54.8-69.2c-5-11.8 7-22.5 19.3-18.7c39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19c12.3-3.8 24.3 6.9 19.3 18.7c-11.8 28-31.1 52-55.4 69.6l0 46.9c0 18.6-5.3 36-14.5 50.8C438.9 464.7 512 368.9 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256zm99.2-41.6c30.4-40.5 91.2-40.5 121.6 0c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4zM400 208a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M336 184a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM195.2 233.6c-17.6-23.5-52.8-23.5-70.4 0c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2zM320 402.6l0 45.4c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-45.4c0-14.7 11.9-26.6 26.6-26.6l2 0c11.3 0 21.1 7.9 23.6 18.9c2.8 12.6 20.8 12.6 23.6 0c2.5-11.1 12.3-18.9 23.6-18.9l2 0c14.7 0 26.6 11.9 26.6 26.6z" />
    </Icon>
);

export default FaceGrinTongueWink;