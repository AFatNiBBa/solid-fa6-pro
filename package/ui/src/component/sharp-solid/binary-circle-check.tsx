
import { Icon } from "../../index";

/**
 * A component that renders the `binary-circle-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary-circle-check?s=sharp-solid binary-circle-check}
 * @preview ![binary-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/binary-circle-check.svg)
 */
const BinaryCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 0l32 0 48 0 32 0 0 32 0 128 16 0 32 0 0 64-32 0-48 0-48 0-32 0 0-64 32 0 16 0 0-96-16 0-32 0 0-64zM0 288l32 0 48 0 32 0 0 32 0 128 16 0 32 0 0 64-32 0-48 0-48 0L0 512l0-64 32 0 16 0 0-96-16 0L0 352l0-64zM32 0L160 0l32 0 0 32 0 160 0 32-32 0L32 224 0 224l0-32L0 32 0 0 32 0zM64 160l64 0 0-96L64 64l0 96zM192 288l32 0 115.2 0c-12.3 24-19.2 51.2-19.2 80l0-16-64 0 0 96 32 0 32 0 19.2 0c11 21.5 26.3 40.5 44.8 55.8l0 8.2-32 0-128 0-32 0 0-32 0-160 0-32zm128 80c0 5.4 .2 10.7 .7 16l-.7 0 0-16zm32 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm222.6-32L552 313.4l-11.3 11.3L480 385.4l-28.7-28.7L440 345.4 417.4 368l11.3 11.3 40 40L480 430.6l11.3-11.3 72-72L574.6 336z" />
    </Icon>
);

export default BinaryCircleCheck;