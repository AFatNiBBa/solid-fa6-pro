
import { Icon, generic } from "../../index";

/**
 * A component that renders the `helmet-un` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-un?s=sharp-duotone-solid helmet-un}
 * @preview ![helmet-un](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/helmet-un.svg)
 */
const HelmetUn: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M215.7 384l2.7 0c3.1-5.3 6.2-10.6 9.3-15.9L242.3 343 320 416.9 320 288l48 0 0 174.5 1.6 1.5 70.4 0 24 0 0 48-24 0-80 0-9.6 0-6.9-6.6L215.7 384z" />
        <path d="M479.5 224C471.2 98.9 367.2 0 240 0C107.5 0 0 107.5 0 240L0 352l0 32 32 0 168 0 18.4 0 9.3-15.9L274.4 288 416 288l64 0 32 0 0-64-32 0-.5 0zM160 112l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64 0-16 32 0 0 16 0 64c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-64 0-16 32 0 0 16zM272 96l8 0 9.9 0 4.4 8.8L320 156.2l0-44.2 0-16 32 0 0 16 0 96 0 16-16 0-8 0-9.9 0-4.4-8.8L288 163.8l0 44.2 0 16-32 0 0-16 0-96 0-16 16 0z" />
    </Icon>
);

export default HelmetUn;