
import { Icon } from "../../index";

/**
 * A component that renders the `fish` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish?s=sharp-thin fish}
 * @preview ![fish](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/fish.svg)
 */
const Fish: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M135.6 197.7l11.5 5.7 8.1-9.9C193.4 146.6 253.7 96 336 96c73.7 0 129.7 40.5 168.2 82.8c19.1 21.1 33.5 42.2 43.2 58c4.8 7.9 8.4 14.5 10.7 19l.1 .2-.1 .2c-2.4 4.5-5.9 11.1-10.7 19c-9.6 15.9-24 37-43.2 58C465.7 375.5 409.7 416 336 416c-82.3 0-142.6-50.6-180.8-97.5l-8.1-9.9-11.5 5.7L35.2 364.5 19.5 348.8l42.8-85.7 3.6-7.2-3.6-7.2L19.5 163.2l15.7-15.7 100.5 50.2zM336 432c160 0 240-176 240-176s-80-176-240-176c-89.4 0-153.8 54.9-193.2 103.4L32 128 0 160l48 96L0 352l32 32 110.8-55.4C182.2 377.1 246.6 432 336 432zm80-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16-32a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Fish;