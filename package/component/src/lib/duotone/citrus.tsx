
import { Icon, generic } from "../../index";

/**
 * A component that renders the `citrus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/citrus?s=duotone citrus}
 * @preview ![citrus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/citrus.svg)
 */
const Citrus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 272c0 132.5 107.5 240 240 240s240-107.5 240-240c0-61-22.8-116.7-60.3-159.1C420.8 122.5 403 128 384 128l-80 0c-8.8 0-16-7.2-16-16l0-16c0-1.4 0-2.7 .1-4.1s.1-2.7 .3-4.1c.2-2.7 .6-5.3 1-8c.9-5.2 2.2-10.3 3.9-15.3c3.4-9.8 8.3-18.9 14.6-27c-16.7-3.7-34-5.6-51.8-5.6C123.5 32 16 139.5 16 272z" />
        <path d="M384 128H304c-8.8 0-16-7.2-16-16V96c0-53 43-96 96-96h80c8.8 0 16 7.2 16 16V32c0 53-43 96-96 96z" />
    </Icon>
);

export default Citrus;