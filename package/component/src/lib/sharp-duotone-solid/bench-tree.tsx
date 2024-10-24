
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bench-tree` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bench-tree?s=sharp-duotone-solid bench-tree}
 * @preview ![bench-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bench-tree.svg)
 */
const BenchTree: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M384 176l0 80 96 0 0 224 0 32 64 0 0-32 0-224 96 0 0-80c0-26.7-13.1-50.3-33.2-64.9c.8-4.9 1.2-10 1.2-15.1c0-53-43-96-96-96s-96 43-96 96c0 5.1 .4 10.2 1.2 15.1C397.1 125.7 384 149.3 384 176z" />
        <path d="M352 192l0 128L32 320l0-128 320 0zM0 352l32 0 64 0 192 0 64 0 32 0 0 64-32 0 0 64 0 32-64 0 0-32 0-64L96 416l0 64 0 32-64 0 0-32 0-64L0 416l0-64z" />
    </Icon>
);

export default BenchTree;