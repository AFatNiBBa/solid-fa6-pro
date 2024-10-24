
import { Icon } from "../../index";

/**
 * A component that renders the `pen-to-square` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-to-square?s=sharp-regular pen-to-square}
 * @preview ![pen-to-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pen-to-square.svg)
 */
const PenToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M330 137.9L374.1 182 233.7 322.4l-50.4 6.3 6.3-50.4L330 137.9zM425 199l17-17 36.1-36.1L512 112 478.1 78.1 433.9 33.9 400 0 366.1 33.9 330 70 313 87l-17 17L144 256l-9.9 78.9L128 384l49.1-6.1L256 368 408 216l17-17zm-17-50.9L363.9 104 400 67.9 444.1 112 408 148.1zM24 64L0 64 0 88 0 488l0 24 24 0 400 0 24 0 0-24 0-176 0-24-48 0 0 24 0 152L48 464l0-352 152 0 24 0 0-48-24 0L24 64z" />
    </Icon>
);

export default PenToSquare;