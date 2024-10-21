
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bags-shopping` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bags-shopping?s=duotone bags-shopping}
 * @preview ![bags-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bags-shopping.svg)
 */
const BagsShopping: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 224L0 416c0 35.3 28.7 64 64 64l97.6 0c-1-5.2-1.6-10.5-1.6-16l0-160c0-44.2 35.8-80 80-80l208 0c0-35.3-28.7-64-64-64l-64 0 0-64c0-53-43-96-96-96s-96 43-96 96l0 64-64 0c-35.3 0-64 28.7-64 64zM176 96c0-26.5 21.5-48 48-48s48 21.5 48 48l0 64-96 0 0-64zM288 336l0 16c0 53 43 96 96 96s96-43 96-96l0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
        <path d="M256 256c-35.3 0-64 28.7-64 64l0 128c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-256 0zm64 80l0 16c0 35.3 28.7 64 64 64s64-28.7 64-64l0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16c0 53-43 96-96 96s-96-43-96-96l0-16c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default BagsShopping;