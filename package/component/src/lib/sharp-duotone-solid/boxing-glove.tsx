
import { Icon, generic } from "../../index";

/**
 * A component that renders the `boxing-glove` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boxing-glove?s=sharp-duotone-solid boxing-glove}
 * @preview ![boxing-glove](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/boxing-glove.svg)
 */
const BoxingGlove: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 400l131.2 0-28 18.7-13.3 8.9 17.8 26.6 13.3-8.9L192 419.2l39.1 26.1 13.3 8.9 17.8-26.6-13.3-8.9-28-18.7L352 400l0 112L32 512l0-112z" />
        <path d="M384 0L0 0 0 352l32 32 0 16 131.2 0-28-18.7-13.3-8.9 17.8-26.6 13.3 8.9L192 380.8l39.1-26.1 13.3-8.9 17.8 26.6-13.3 8.9-28 18.7L352 400l0-16 96-96 0-128-16 0-48 0-80 0 0 32 0 64 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-80-160 0-5.3 0-4.3-3.2-32-24-12.8-9.6 19.2-25.6 12.8 9.6L117.3 160 272 160l0-16 0-16 16 0 96 0L384 0z" />
    </Icon>
);

export default BoxingGlove;