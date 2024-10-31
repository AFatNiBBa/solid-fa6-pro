
import { Icon, generic } from "../../index";

/**
 * A component that renders the `joint` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/joint?s=sharp-duotone-solid joint}
 * @preview ![joint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/joint.svg)
 */
const Joint: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M384 0l0 43c0 55.2 21.9 108.1 60.9 147.1l21 21c9 9 14.1 21.2 14.1 33.9l0 43 64 0 0-43c0-29.7-11.8-58.2-32.8-79.2l-21-21C463.2 117.8 448 81.2 448 43l0-43L384 0zm96 0l0 43c0 29.7 11.8 58.2 32.8 79.2l21 21c27 27 42.2 63.6 42.2 101.8l0 43 64 0 0-43c0-55.2-21.9-108.1-60.9-147.1l-21-21c-9-9-14.1-21.2-14.1-33.9l0-43L480 0z" />
        <path d="M234.6 354.5C89.6 368 0 432 0 432s112 80 288 80l77.8 0L234.6 354.5zM407.5 512l56.5 0 61.8 0L392.5 352 336 352l-48 0c-4.6 0-9.2 .1-13.7 .2L407.5 512zM624 512l16 0 0-160-205.8 0L567.5 512l56.5 0z" />
    </Icon>
);

export default Joint;