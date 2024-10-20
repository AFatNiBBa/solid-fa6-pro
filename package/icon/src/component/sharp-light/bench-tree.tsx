
import { Icon } from "../../index";

/**
 * A component that renders the `bench-tree` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bench-tree?s=sharp-light bench-tree}
 * @preview ![bench-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bench-tree.svg)
 */
const BenchTree: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M575.2 106.1c.5-3.3 .8-6.7 .8-10.1c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 3.5 .3 6.8 .8 10.1l3.1 19.4-15.9 11.5C423.8 145.8 416 160 416 176l0 48 192 0 0-48c0-16-7.8-30.2-19.9-38.9l-15.9-11.5 3.1-19.4zM384 176c0-26.7 13.1-50.3 33.2-64.9c-.8-4.9-1.2-10-1.2-15.1c0-53 43-96 96-96s96 43 96 96c0 5.1-.4 10.2-1.2 15.1C626.9 125.7 640 149.3 640 176l0 48 0 32-32 0-80 0 0 240 0 16-32 0 0-16 0-240-80 0-32 0 0-32 0-48zM64 224l0 64 32 0 192 0 32 0 0-64L64 224zm0 96l-32 0 0-32 0-64 0-32 32 0 256 0 32 0 0 32 0 64 0 32-32 0 0 48 16 0 32 0 16 0 0 32-16 0-16 0 0 96 0 16-32 0 0-16 0-96-16 0L80 400l-16 0 0 96 0 16-32 0 0-16 0-96-16 0L0 400l0-32 16 0 32 0 16 0 0-48zm32 0l0 48 192 0 0-48L96 320z" />
    </Icon>
);

export default BenchTree;