
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eraser` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eraser?s=duotone eraser}
 * @preview ![eraser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/eraser.svg)
 */
const Eraser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M38.6 336c0 16.4 6.2 32.8 18.7 45.3l80 80c12 12 28.3 18.7 45.3 18.7L288 480l9.4 0L512 480c17.7 0 32-14.3 32-32s-14.3-32-32-32l-124.1 0c7.4-7.4 14.7-14.7 22.1-22.1c-15.1-15.1-30.2-30.2-45.3-45.3L297.4 416l-9.4 0-105.4 0-80-80L227.3 211.3l-45.3-45.3L57.4 290.7C44.9 303.2 38.6 319.6 38.6 336z" />
        <path d="M409.9 393.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0L182.1 166.1l45.3 45.3L364.7 348.7l45.3 45.3z" />
    </Icon>
);

export default Eraser;