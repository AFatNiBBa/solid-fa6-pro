
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sushi-roll` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sushi-roll?s=sharp-duotone-solid sushi-roll}
 * @preview ![sushi-roll](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sushi-roll.svg)
 */
const SushiRoll: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M85.2 175.9c10.1 7 23.4 13.2 39.2 18.2l35.2-32.6 74.9-26.4 8.9 19.4 3.4 7.5 7.7 2.9 73.7 27.6c20-6.9 35.7-15.7 45.3-25.8l-97.2-36.4L253.8 81.1c-9.7-.7-19.6-1.1-29.8-1.1c-4.9 0-9.8 .1-14.6 .3l8.4 18.3-75.3 26.5-3.9 1.4-3 2.8L85.2 175.9z" />
        <path d="M448 368l0-224C448 82.1 347.7 32 224 32S0 82.1 0 144L0 368s48 112 224 112s224-112 224-112zM224 208c-88.4 0-160-28.7-160-64s71.6-64 160-64s160 28.7 160 64s-71.6 64-160 64z" />
    </Icon>
);

export default SushiRoll;