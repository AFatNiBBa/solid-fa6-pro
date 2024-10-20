
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kiwi-bird` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kiwi-bird?s=sharp-duotone-solid kiwi-bird}
 * @preview ![kiwi-bird](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/kiwi-bird.svg)
 */
const KiwiBird: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 390.3c14.9 8.6 31 15.3 48 19.6l0 46 0 24-48 0 0-24 0-65.7zm112 25c16.7-1.4 32.8-4.9 48-10.3l0 50.9 0 24-48 0 0-24 0-40.7zM464 352l112 0 0 128L464 352z" />
        <path d="M192 416c56.9 0 108-24.7 143.1-64L576 352l0-128c0-70.7-57.3-128-128-128L335.1 96C300 56.7 248.9 32 192 32C86 32 0 118 0 224S86 416 192 416zM448 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default KiwiBird;