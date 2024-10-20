
import { Icon } from "../../index";

/**
 * A component that renders the `joint` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/joint?s=sharp-thin joint}
 * @preview ![joint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/joint.svg)
 */
const Joint: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 0l0 43c0 44.6 17.7 87.3 49.2 118.8l21 21C534.7 199.3 544 221.7 544 245l0 43-16 0 0-43c0-19.1-7.6-37.4-21.1-50.9l-21-21C451.4 138.6 432 91.8 432 43l0-43 16 0zM624 288l0-43c0-44.6-17.7-87.3-49.2-118.8l-21-21C537.3 88.7 528 66.3 528 43l0-43 16 0 0 43c0 19.1 7.6 37.4 21.1 50.9l21 21C620.6 149.4 640 196.2 640 245l0 43-16 0zM14.8 441.4C5.1 435.6 0 432 0 432s5.1-3.6 14.8-9.4C50.7 401.5 149.5 352 288 352l336 0 16 0 0 16 0 128 0 16-16 0-336 0c-138.5 0-237.3-49.5-273.2-70.6zM30.7 432c12.6 7 30.6 16.1 53.3 25.1C132.5 476.6 202.4 496 288 496l54 0L249.6 372.8l-2.5-3.3c-67.1 4.9-122.6 21.1-163.2 37.4C61.3 415.9 43.3 425 30.7 432zm235.6-63.6l92.1 122.8L362 496l140 0L409.6 372.8 406 368l-118 0c-7.3 0-14.6 .1-21.7 .4zM426 368l92.4 123.2L522 496l102 0 0-128-198 0z" />
    </Icon>
);

export default Joint;