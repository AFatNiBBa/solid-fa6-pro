
import { Icon } from "../../index";

/**
 * A component that renders the `eraser` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eraser?s=sharp-solid eraser}
 * @preview ![eraser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/eraser.svg)
 */
const Eraser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M293.5 416l-5.5 0s0 0 0 0l-101.5 0-80-80L229.3 213.3 362.7 346.7 293.5 416zm90.5 0L514.7 285.3 560 240l-45.3-45.3L381.3 61.3 336 16 290.7 61.3 61.3 290.7 16 336l45.3 45.3L160 480l160 0s0 0 0 0l192 0 32 0 0-64-32 0-128 0z" />
    </Icon>
);

export default Eraser;