
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-sad-cry` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-sad-cry?s=sharp-duotone-solid face-sad-cry}
 * @preview ![face-sad-cry](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-sad-cry.svg)
 */
const FaceSadCry: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 94.8 51.5 177.5 128 221.8c0-63.2 0-126.5 0-189.8c0-5.3 0-10.7 0-16l32 0c0 5.3 0 10.7 0 16c0 68.5 0 136.9 0 205.4c29.6 12 62.1 18.6 96 18.6s66.4-6.6 96-18.6L352 288l0-16 32 0 0 16 0 189.8c76.5-44.3 128-127 128-221.8C512 114.6 397.4 0 256 0S0 114.6 0 256zm91.2-37.6c34.4-45.9 103.2-45.9 137.6 0c-8.6 6.4-17.1 12.8-25.6 19.2c-21.6-28.8-64.8-28.8-86.4 0c-8.5-6.4-17.1-12.8-25.6-19.2zM208 336c0-26.5 21.5-48 48-48s48 21.5 48 48l0 32c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-32zm75.2-117.6c34.4-45.9 103.2-45.9 137.6 0l-25.6 19.2c-21.6-28.8-64.8-28.8-86.4 0c-8.5-6.4-17.1-12.8-25.6-19.2z" />
        <path d="M203.2 237.6l25.6-19.2c-34.4-45.9-103.2-45.9-137.6 0l25.6 19.2c21.6-28.8 64.8-28.8 86.4 0zM128 477.8c10.2 5.9 20.9 11.2 32 15.6L160 288l0-16-32 0 0 16 0 189.8zm224 15.6c11.1-4.5 21.8-9.7 32-15.6L384 288l0-16-32 0 0 16 0 205.4zM308.8 237.6c21.6-28.8 64.8-28.8 86.4 0l25.6-19.2c-34.4-45.9-103.2-45.9-137.6 0l25.6 19.2z" />
    </Icon>
);

export default FaceSadCry;