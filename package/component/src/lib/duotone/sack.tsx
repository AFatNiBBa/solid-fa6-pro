
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sack` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sack?s=duotone sack}
 * @preview ![sack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sack.svg)
 */
const Sack: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416c0 53 43 96 96 96l320 0c53 0 96-43 96-96c0-165.1-122.3-243.3-179-279.6c-4.8-3.1-9.2-5.9-13-8.4l-128 0c-3.8 2.5-8.1 5.3-13 8.4C122.3 172.7 0 250.9 0 416zM144.6 24.9L192 96l128 0 47.4-71.1C374.5 14.2 366.9 0 354.1 0L157.9 0c-12.8 0-20.4 14.2-13.3 24.9z" />
        <path d="M176 112c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Sack;