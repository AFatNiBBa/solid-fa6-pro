
import { Icon } from "../../index";

/**
 * A component that renders the `pen-circle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-circle?s=sharp-thin pen-circle}
 * @preview ![pen-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pen-circle.svg)
 */
const PenCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM327.3 111.9l11.3 11.3 50.2 50.2 11.3 11.3L388.8 196 214.3 370.6l-69.7 10.9L128 384l2.6-16.6 10.9-69.7L327.3 111.9zM156.4 305.4l-9.3 59.5 59.5-9.3L336.4 225.8l-50.2-50.2L156.4 305.4zM377.5 184.7l-50.2-50.2-29.8 29.8 50.2 50.2 29.8-29.8z" />
    </Icon>
);

export default PenCircle;