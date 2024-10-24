
import { Icon } from "../../index";

/**
 * A component that renders the `circle-4` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-4?s=solid circle-4}
 * @preview ![circle-4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-4.svg)
 */
const Circle_4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM223.6 129.2c-12.6-4.2-26.2 2.6-30.4 15.2l-48 144c-2.4 7.3-1.2 15.4 3.3 21.6s11.8 10 19.5 10l104 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 56-70.7 0 37.5-112.4c4.2-12.6-2.6-26.2-15.2-30.4z" />
    </Icon>
);

export default Circle_4;