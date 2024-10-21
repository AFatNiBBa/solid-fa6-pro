
import { Icon } from "../../index";

/**
 * A component that renders the `fish` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish?s=sharp-light fish}
 * @preview ![fish](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/fish.svg)
 */
const Fish: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M137.8 204.8l21.2 8.5L174 196c37-42.9 91.1-84 162-84c67.4 0 119.4 36.9 156.3 77.5c18.3 20.1 32.1 40.3 41.3 55.6c2.5 4 4.6 7.7 6.3 10.9c-1.8 3.2-3.9 6.9-6.3 10.9c-9.2 15.2-23 35.5-41.3 55.6C455.4 363.1 403.4 400 336 400c-71 0-125-41.1-162-84L159 298.7l-21.2 8.5L39.7 346.5l-.8-.8 37.7-75.4L83.8 256l-7.2-14.3L38.9 166.3l.8-.8 98.1 39.3zM336 432c160 0 240-176 240-176s-80-176-240-176c-84.3 0-146.4 48.9-186.3 95.1L32 128 0 160l48 96L0 352l32 32 117.7-47.1C189.6 383.1 251.7 432 336 432zm80-152a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Fish;