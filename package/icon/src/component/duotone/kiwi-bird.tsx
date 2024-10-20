
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kiwi-bird` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kiwi-bird?s=duotone kiwi-bird}
 * @preview ![kiwi-bird](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/kiwi-bird.svg)
 */
const KiwiBird: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 390.3c14.9 8.6 31 15.3 48 19.6l0 46c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-65.7zm112 25c16.7-1.4 32.8-4.9 48-10.3l0 50.9c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40.7zm269.6-66.8c14.1-3.3 27.3-9 39.1-16.5s22.4-17 31.2-27.9s15.8-23.3 20.6-36.8c2.4-6.7 4.3-13.7 5.6-20.9c.6-3.6 1.1-7.2 1.4-10.9c.2-1.8 .3-3.7 .4-5.6c.1-1.8 .1-3.7 .1-5.6L576 464c0 7.3-4.9 13.7-12 15.5s-14.5-1.3-18-7.7L477.6 348.6z" />
        <path d="M291.2 388.4c31.2-18.8 64.7-36.4 101.1-36.4l55.7 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-55.7 0c-36.4 0-69.9-17.6-101.1-36.4C262.3 42.1 228.3 32 192 32C86 32 0 118 0 224S86 416 192 416c36.3 0 70.3-10.1 99.2-27.6zM448 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default KiwiBird;