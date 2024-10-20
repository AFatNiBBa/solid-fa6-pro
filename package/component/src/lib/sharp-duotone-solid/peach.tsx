
import { Icon, generic } from "../../index";

/**
 * A component that renders the `peach` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peach?s=sharp-duotone-solid peach}
 * @preview ![peach](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/peach.svg)
 */
const Peach: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 280C0 432 256 512 256 512s256-80 256-232c0-92.8-75.2-168-168-168c-19.1 0-37.5 3.2-54.6 9.1C337.2 157.6 368 215.2 368 280l-32 0c0-60.5-32-113.6-80-143.1c-.3-.2-.6-.4-.9-.5C229.7 120.9 199.9 112 168 112C75.2 112 0 187.2 0 280z" />
        <path d="M373.6 82.2C363.9 80.7 354 80 344 80c-31.5 0-61.4 7.3-88 20.4C229.4 87.3 199.5 80 168 80c-10 0-19.9 .7-29.6 2.2C122.1 64.9 112 41.6 112 16l0-16 16 0 32 0c53 0 96 43 96 96c0-53 43-96 96-96l32 0 16 0 0 16c0 25.6-10.1 48.9-26.4 66.2z" />
    </Icon>
);

export default Peach;