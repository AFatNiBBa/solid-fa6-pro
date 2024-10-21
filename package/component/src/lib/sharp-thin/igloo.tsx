
import { Icon } from "../../index";

/**
 * A component that renders the `igloo` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/igloo?s=sharp-thin igloo}
 * @preview ![igloo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/igloo.svg)
 */
const Igloo: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 336l-96 0 0-144 64.1 0c20.4 38.1 31.9 81.7 31.9 128l0 16zm-112 0l-69.5 0c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64L128 336l0-144 192 0 16 0 112 0 0 144zm-65.3 16l65.3 0 16 0 96 0 0 112-176 0 0-96c0-5.5-.5-10.8-1.3-16zM128 352l65.3 0c-.9 5.2-1.3 10.5-1.3 16l0 96L16 464l0-112 96 0 16 0zm-16-16l-96 0 0-16c0-46.3 11.6-89.9 32-128.1l0 .1 64 0 0 144zM518.8 176L336 176l0-123.8C413 65.9 478.8 112.1 518.8 176zM288 48c10.8 0 21.5 .6 32 1.9L320 176 57.2 176C105.3 99.1 190.7 48 288 48zM16 480l176 0 192 0 176 0 16 0 0-16 0-144C576 160.9 447.1 32 288 32S0 160.9 0 320L0 464l0 16 16 0zM288 288c44.2 0 80 35.8 80 80l0 96-160 0 0-96c0-44.2 35.8-80 80-80z" />
    </Icon>
);

export default Igloo;