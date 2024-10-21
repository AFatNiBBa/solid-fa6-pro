
import { Icon } from "../../index";

/**
 * A component that renders the `eraser` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eraser?s=sharp-light eraser}
 * @preview ![eraser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/eraser.svg)
 */
const Eraser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M173.3 448l133.5 0 59.3-59.3L187.3 209.9 61.3 336l112 112zm36.7-260.7L388.7 366.1 514.7 240 336 61.3 209.9 187.3zM38.6 358.6L16 336l22.6-22.6L313.4 38.6 336 16l22.6 22.6L537.4 217.4 560 240l-22.6 22.6L352 448l176 0 16 0 0 32-16 0-224 0-144 0L38.6 358.6z" />
    </Icon>
);

export default Eraser;