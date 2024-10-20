
import { Icon, generic } from "../../index";

/**
 * A component that renders the `peach` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peach?s=duotone peach}
 * @preview ![peach](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/peach.svg)
 */
const Peach: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 280C0 416.2 199.3 494.6 240.6 509.4c5 1.8 10.1 2.6 15.4 2.6s10.4-.8 15.4-2.6C312.7 494.6 512 416.2 512 280c0-92.8-75.2-168-168-168c-18.3 0-35.9 2.9-52.3 8.3c-.8 .3-1.5 .5-2.3 .7c43.8 33.5 73.4 84.7 78 143c.7 8.8-6.5 16-15.4 16s-15.9-7.2-16.8-16c-6.4-68-53.3-124.1-116.3-144.2c-16.1-5.1-33.2-7.9-50.9-7.9C75.2 112 0 187.2 0 280z" />
        <path d="M377.5 82.8C366.6 81 355.4 80 344 80c-31.5 0-61.4 7.3-88 20.4C229.4 87.3 199.5 80 168 80c-11.4 0-22.6 1-33.5 2.8C120.5 67.2 112 46.6 112 24c0-13.3 10.7-24 24-24l24 0c53 0 96 43 96 96c0-53 43-96 96-96l24 0c13.3 0 24 10.7 24 24c0 22.6-8.5 43.2-22.5 58.8z" />
    </Icon>
);

export default Peach;