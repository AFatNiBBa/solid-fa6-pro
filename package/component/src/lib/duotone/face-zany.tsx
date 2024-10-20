
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-zany` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-zany?s=duotone face-zany}
 * @preview ![face-zany](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-zany.svg)
 */
const FaceZany: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M34.4 384c36.2 62.7 94.9 104.3 160.1 120.5c-11.5-15.8-18.4-35.4-18.4-56.5l0-39.8c-10.4-6.2-20.1-13.7-28.9-22.2c-10.2-9.9-6.6-26.3 5.7-33.4L391.2 214.9c12.3-7.1 28.3-2 31.8 11.8c15.2 59.4-5.9 124.1-55 165l0 56.3c0 15.4-3.6 30-10.1 42.9c8.8-3.8 17.5-8.2 26.1-13.2c82.1-47.4 128-133.5 128-221.9c0-43.4-11.1-87.4-34.3-127.8C407.1 5.6 250.5-36.4 128.1 34.3S-36.3 261.6 34.4 384zM192 224A64 64 0 1 1 64 224a64 64 0 1 1 128 0zm192-72a72 72 0 1 1 -144 0 72 72 0 1 1 144 0z" />
        <path d="M296 104a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM104 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM336.1 402.6l0 45.4c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-45.4c0-14.7 11.9-26.6 26.6-26.6l2 0c11.3 0 21.1 7.9 23.6 18.9c2.8 12.6 20.8 12.6 23.6 0c2.5-11.1 12.3-18.9 23.6-18.9l2 0c14.7 0 26.6 11.9 26.6 26.6z" />
    </Icon>
);

export default FaceZany;