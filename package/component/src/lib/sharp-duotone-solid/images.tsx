
import { Icon, generic } from "../../index";

/**
 * A component that renders the `images` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/images?s=sharp-duotone-solid images}
 * @preview ![images](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/images.svg)
 */
const Images: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 32l480 0 0 352L96 384 96 32zm80 248.5l0 9.1 0 8 0 24 24 0 56 0 24 0 48 0 24 0 120 0 24 0 0-24 0-8 0-7.6-4.4-6.2-96-136L376 112l-19.6 27.8L299.1 221l-17.1-19.3L264 181.5l-17.9 20.2-64 72-6.1 6.8zM192 128a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M48 120l0-24L0 96l0 24L0 456l0 24 24 0 432 0 24 0 0-48-24 0L48 432l0-312zm347.6 19.8L376 112l-19.6 27.8L299.1 221l-17.1-19.3L264 181.5l-17.9 20.2-64 72-6.1 6.8 0 9.1 0 8 0 24 24 0 56 0 24 0 48 0 24 0 120 0 24 0 0-24 0-8 0-7.6-4.4-6.2-96-136z" />
    </Icon>
);

export default Images;