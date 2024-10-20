
import { Icon } from "../../index";

/**
 * A component that renders the `computer-classic` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-classic?s=sharp-thin computer-classic}
 * @preview ![computer-classic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/computer-classic.svg)
 */
const ComputerClassic: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 16l0 400-16 0-16 0L48 416l-16 0-16 0L16 16l416 0zM416 432l16 0 16 0 0-16 0-400 0-16L432 0 16 0 0 0 0 16 0 416l0 16 16 0 16 0 0 64 0 16 16 0 352 0 16 0 0-16 0-64zM48 432l352 0 0 64L48 496l0-64zM368 80l0 176L80 256 80 80l288 0zM80 64L64 64l0 16 0 176 0 16 16 0 288 0 16 0 0-16 0-176 0-16-16 0L80 64zM224 336l0 16 8 0 144 0 8 0 0-16-8 0-144 0-8 0zM80 368a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default ComputerClassic;