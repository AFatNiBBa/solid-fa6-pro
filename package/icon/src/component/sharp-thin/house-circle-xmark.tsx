
import { Icon } from "../../index";

/**
 * A component that renders the `house-circle-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-circle-xmark?s=sharp-thin house-circle-xmark}
 * @preview ![house-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/house-circle-xmark.svg)
 */
const HouseCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M293.2 9.9L288 5.5l-5.2 4.5-280 240 10.4 12.1L64 218.5 64 504l0 8 8 0 322.8 0c-6.9-4.9-13.5-10.2-19.6-16l-7.2 0s0 0 0 0l-16 0s0 0 0 0l-128 0 0-176 32 0 70.6 0c1.5-5.4 3.3-10.8 5.4-16l-116 0-8 0 0 8 0 184L80 496l0-291.2L288 26.5l193.7 166c4.7-.4 9.5-.6 14.3-.6c3.3 0 6.7 .1 10 .3L293.2 9.9zM368 368a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zm272 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-82.3-50.3l5.7-5.7L552 300.7l-5.7 5.7L496 356.7l-50.3-50.3-5.7-5.7L428.7 312l5.7 5.7L484.7 368l-50.3 50.3-5.7 5.7L440 435.3l5.7-5.7L496 379.3l50.3 50.3 5.7 5.7L563.3 424l-5.7-5.7L507.3 368l50.3-50.3z" />
    </Icon>
);

export default HouseCircleXmark;