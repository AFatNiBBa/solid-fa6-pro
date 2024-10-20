
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-zany` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-zany?s=sharp-duotone-solid face-zany}
 * @preview ![face-zany](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-zany.svg)
 */
const FaceZany: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M34.4 384c36.2 62.7 94.9 104.3 160.1 120.5c-11.5-15.8-18.4-35.4-18.4-56.5l0-44.5c-16-10.5-30.2-24-41.9-40.2L409.9 204.1c29.4 65.1 11.7 141.7-41.9 187.4l0 56.5c0 15.4-3.6 30-10.1 42.9c8.8-3.8 17.5-8.2 26.1-13.2c82.1-47.4 128-133.5 128-221.9c0-43.4-11.1-87.4-34.3-127.8C407.1 5.6 250.5-36.4 128.1 34.3S-36.3 261.6 34.4 384zM192 224A64 64 0 1 1 64 224a64 64 0 1 1 128 0zm192-72a72 72 0 1 1 -144 0 72 72 0 1 1 144 0z" />
        <path d="M296 104a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM104 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM336 384l0 64c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-64 48 0 0 24 32 0 0-24 48 0z" />
    </Icon>
);

export default FaceZany;