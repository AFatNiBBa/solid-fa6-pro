
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-glasses` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-glasses?s=sharp-duotone-solid face-glasses}
 * @preview ![face-glasses](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-glasses.svg)
 */
const FaceGlasses: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256c0-22.1-2.8-43.5-8.1-64l-7.9 0-32 0 0 96 0 16-16 0-160 0-16 0 0-16 0-96-32 0 0 96 0 16-16 0L64 304l-16 0 0-16 0-96-32 0-7.9 0C2.8 212.5 0 233.9 0 256zm18.6-96L48 160l0-16 0-16 16 0 160 0 16 0 0 16 0 16 32 0 0-16 0-16 16 0 160 0 16 0 0 16 0 16 29.4 0C455.4 66.2 363.4 0 256 0S56.6 66.2 18.6 160zM129.7 343.2l28.6-14.3c8.7 17.5 41.3 55.2 97.7 55.2s88.9-37.7 97.7-55.2l28.6 14.3C369.7 368.3 327.6 416 256 416s-113.7-47.7-126.3-72.8z" />
        <path d="M64 128l-16 0 0 16 0 16-32 0L0 160l0 32 16 0 32 0 0 96 0 16 16 0 160 0 16 0 0-16 0-96 32 0 0 96 0 16 16 0 160 0 16 0 0-16 0-96 32 0 16 0 0-32-16 0-32 0 0-16 0-16-16 0-160 0-16 0 0 16 0 16-32 0 0-16 0-16-16 0L64 128zm16 64l0-32 128 0 0 112L80 272l0-80zm352-32l0 32 0 80-128 0 0-112 128 0zM184.4 224a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm168 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default FaceGlasses;