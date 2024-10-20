
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen?s=duotone pen}
 * @preview ![pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pen.svg)
 */
const Pen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M303 79C346.3 122.3 389.7 165.6 433 209c19.9-19.9 39.8-39.8 59.7-59.7c12.5-12.5 18.7-28.9 18.7-45.3s-6.2-32.8-18.7-45.3L453.3 19.3C440.8 6.8 424.4 .6 408 .6s-32.8 6.2-45.3 18.7L303 79z" />
        <path d="M433 209L303 79 52.8 329.3c-6.6 6.6-11.5 14.8-14.1 23.8L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l128.2-37.7c9-2.6 17.2-7.5 23.8-14.1L433 209z" />
    </Icon>
);

export default Pen;