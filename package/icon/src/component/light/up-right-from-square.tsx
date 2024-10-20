
import { Icon } from "../../index";

/**
 * A component that renders the `up-right-from-square` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right-from-square?s=light up-right-from-square}
 * @preview ![up-right-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/up-right-from-square.svg)
 */
const UpRightFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 33c0-18.2 14.8-33 33-33L480 0c17.7 0 32 14.3 32 32l0 127c0 18.2-14.8 33-33 33c-8.7 0-17.1-3.5-23.3-9.7L404 130.6 235.3 299.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L381.4 108 329.7 56.3C323.5 50.1 320 41.7 320 33zm33-1c-.5 0-1 .4-1 1c0 .3 .1 .5 .3 .7L478.3 159.7c.2 .2 .4 .3 .7 .3c.5 0 1-.4 1-1l0-127L353 32zM0 96C0 60.7 28.7 32 64 32l144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 64C46.3 64 32 78.3 32 96l0 352c0 17.7 14.3 32 32 32l352 0c17.7 0 32-14.3 32-32l0-144c0-8.8 7.2-16 16-16s16 7.2 16 16l0 144c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default UpRightFromSquare;