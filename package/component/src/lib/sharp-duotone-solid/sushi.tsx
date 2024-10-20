
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sushi` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sushi?s=sharp-duotone-solid sushi}
 * @preview ![sushi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sushi.svg)
 */
const Sushi: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 374.8l250.1-86.7 261.9 87 0 8.9c0 35.3-28.7 64-64 64c-19.1 0-36.3-8.4-48-21.7c-11.7 13.3-28.9 21.7-48 21.7s-36.3-8.4-48-21.7c-11.7 13.3-28.9 21.7-48 21.7s-36.3-8.4-48-21.7c-11.7 13.3-28.9 21.7-48 21.7s-36.3-8.4-48-21.7C132.3 439.6 115.1 448 96 448c-35.3 0-64-28.7-64-64l0-9.2z" />
        <path d="M405.9 295.5L506.3 125.6c24.8 26.7 42.1 60.7 48.5 98.8L576 352 405.9 295.5zm76.2-191.9L374.8 285.2l-92.7-30.8L393.5 66.1c32.9 4.8 63.2 18 88.7 37.5zM246.6 64l110.9 0L235.6 270.4 96.1 318.7 246.6 64zm-37.2 0L49.4 334.9 0 352 21.3 224.4C36.6 132.2 116.1 64.6 209.5 64z" />
    </Icon>
);

export default Sushi;