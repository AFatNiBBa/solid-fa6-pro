
import { Icon } from "../../index";

/**
 * A component that renders the `circle-2` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-2?s=solid circle-2}
 * @preview ![circle-2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-2.svg)
 */
const Circle_2: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM222.7 184.7l-24.2 18.4c-10.5 8-25.6 6-33.6-4.5s-6-25.6 4.5-33.6l24.2-18.4c15.8-12 35.2-18.4 55.1-18.1l3.4 .1c46.5 .7 83.8 38.6 83.8 85.1c0 23.5-9.7 46-26.9 62.1L244.7 336l83.3 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-9.8 0-18.7-6-22.3-15.2s-1.3-19.6 5.9-26.3L276.3 240.6c7.5-7 11.7-16.8 11.7-27.1c0-20.3-16.3-36.8-36.6-37.1l-3.4-.1c-9.1-.1-18 2.8-25.3 8.3z" />
    </Icon>
);

export default Circle_2;