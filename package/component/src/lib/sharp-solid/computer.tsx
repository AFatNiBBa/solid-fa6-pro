
import { Icon } from "../../index";

/**
 * A component that renders the `computer` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer?s=sharp-solid computer}
 * @preview ![computer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/computer.svg)
 */
const Computer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 96l0 224L64 320 64 96l320 0zM64 32L0 32 0 96 0 320l0 64 64 0 117.3 0-10.7 32L64 416l0 64 320 0 0-64-106.7 0-10.7-32L384 384l64 0 0-64 0-224 0-64-64 0L64 32zm576 0L480 32l0 448 160 0 0-448zM544 96l32 0 16 0 0 32-16 0-32 0-16 0 0-32 16 0zm-16 64l16 0 32 0 16 0 0 32-16 0-32 0-16 0 0-32zm32 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Computer;