
import { Icon } from "../../index";

/**
 * A component that renders the `computer` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer?s=sharp-thin computer}
 * @preview ![computer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/computer.svg)
 */
const Computer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 48l0 320 162.2 0 5.8 0 80 0 5.8 0L432 368l0-320L16 48zM172.9 384L16 384 0 384l0-16L0 48 0 32l16 0 416 0 16 0 0 16 0 320 0 16-16 0-156.9 0 26.7 80 82.2 0 0 16-76.9 0L296 480l-144 0-11.1 0L64 480l0-16 82.2 0 26.7-80zm16.9 0l-26.7 80 121.8 0-26.7-80-68.5 0zM624 48L496 48l0 416 128 0 0-416zM496 32l128 0 16 0 0 16 0 416 0 16-16 0-128 0-16 0 0-16 0-416 0-16 16 0zm24 96l8 0 64 0 8 0 0 16-8 0-64 0-8 0 0-16zm8 64l64 0 8 0 0 16-8 0-64 0-8 0 0-16 8 0zm16 144a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM64 96l0 224 320 0 0-224L64 96zM48 80l16 0 320 0 16 0 0 16 0 224 0 16-16 0L64 336l-16 0 0-16L48 96l0-16z" />
    </Icon>
);

export default Computer;