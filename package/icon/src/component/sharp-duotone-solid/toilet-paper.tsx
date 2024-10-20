
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet-paper` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper?s=sharp-duotone-solid toilet-paper}
 * @preview ![toilet-paper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/toilet-paper.svg)
 */
const ToiletPaper: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M8 512l357.3 0 8.2-19.7c14.1-34.1 23.6-70.7 29.9-108.3C414.3 320.1 416 253.4 416 192c0-79.2 24-147.2 58.2-176.5C485.8 5.5 498.6 0 512 0L160 0C107 0 64 86 64 192c0 89.9-3.9 190.6-37.6 275.8L8 512zM160 208a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M403.5 384C414.3 320.1 416 253.4 416 192c0 0 0 0 0 0c0-79.2 24-147.2 58.2-176.5C485.8 5.5 498.6 0 512 0c53 0 96 86 96 192s-43 192-96 192l-108.5 0zM512 256c17.7 0 32-28.7 32-64s-14.3-64-32-64s-32 28.7-32 64s14.3 64 32 64zM128 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default ToiletPaper;