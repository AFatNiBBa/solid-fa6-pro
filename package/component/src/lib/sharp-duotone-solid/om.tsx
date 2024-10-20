
import { Icon, generic } from "../../index";

/**
 * A component that renders the `om` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/om?s=sharp-duotone-solid om}
 * @preview ![om](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/om.svg)
 */
const Om: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 64s16 96 120 96c72 0 104-32 104-32l0-64s-66.5 32-112 32s-112-32-112-32zm80-32l32 32 32-32L368 0 336 32z" />
        <path d="M102.6 183.7C111 169.4 126.4 160 144 160c26.5 0 48 21.5 48 48s-21.5 48-48 48l-56 0 24 64 32 0 16 0c35.3 0 64 28.7 64 64s-28.7 64-64 64C48 448 0 352 0 352s0 160 160 160c70.7 0 128-57.3 128-128c0-23.3-6.2-45.2-17.1-64l49.1 0 13.3 0 9.4-9.4L397.3 256l18.7 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32c-64 0-96-48-96-48l0 64s16 48 96 48c53 0 96-43 96-96l0-96c0-53-43-96-96-96l-32 0-13.3 0-9.4 9.4L306.7 256l-61.5 0c6.9-14.5 10.8-30.8 10.8-48c0-61.9-50.1-112-112-112c-41.2 0-77.1 22.2-96.5 55.2l55.1 32.5z" />
    </Icon>
);

export default Om;