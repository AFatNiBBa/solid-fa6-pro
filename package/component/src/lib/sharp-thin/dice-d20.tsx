
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d20` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d20?s=sharp-thin dice-d20}
 * @preview ![dice-d20](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/dice-d20.svg)
 */
const DiceD20: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 507.4l8 4.6 8-4.6L480 384l0-8s0 0 0 0l0-238.2 0-9.8-7.6-4.4L256 0 39.6 123.6 32 128l0 9.8L32 376s0 0 0 0l0 8L248 507.4zM67.9 386.1L248 399.4l0 89.6L67.9 386.1zM264 399.4l180.1-13.3L264 489l0-89.6zm200-51.6L378.7 210.2 464 149.3l0 198.6zM370.5 196.4L272 27.6 458 133.9l-87.5 62.5zM240 27.6L141.5 196.4 54 133.9 240 27.6zM48 149.3l85.3 60.9L48 347.9l0-198.6zm95.9 74l97.1 159.6L53.7 369l90.2-145.7zm127 159.6l97.1-159.6L458.3 369 270.9 382.9zM256 376.6L158.2 216l195.5 0L256 376.6zM157.9 200L256 31.9 354.1 200l-196.1 0z" />
    </Icon>
);

export default DiceD20;