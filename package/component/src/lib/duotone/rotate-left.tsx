
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rotate-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-left?s=duotone rotate-left}
 * @preview ![rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rotate-left.svg)
 */
const RotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M97.6 369.1c-12.5 12.5-12.5 32.8 0 45.3C141.3 458.1 198.7 480 256 480s114.7-21.9 158.4-65.6S480 313.3 480 256s-21.9-114.7-65.6-158.4c-87.2-87.2-228.3-87.5-315.8-1c15.1 15.1 30.2 30.2 45.3 45.3c62.6-61.5 163.1-61.2 225.3 1c62.5 62.5 62.5 163.8 0 226.3s-163.8 62.5-226.3 0c-12.5-12.5-32.8-12.5-45.3 0z" />
        <path d="M168 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z" />
    </Icon>
);

export default RotateLeft;