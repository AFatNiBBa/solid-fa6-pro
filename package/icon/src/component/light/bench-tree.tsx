
import { Icon } from "../../index";

/**
 * A component that renders the `bench-tree` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bench-tree?s=light bench-tree}
 * @preview ![bench-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bench-tree.svg)
 */
const BenchTree: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M575.2 106.1c-1.9 11.9 3.1 23.9 12.9 30.9C600.2 145.8 608 160 608 176c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48c0-16 7.8-30.2 19.9-38.9c9.8-7.1 14.7-19 12.9-30.9c-.5-3.3-.8-6.7-.8-10.1c0-35.3 28.7-64 64-64s64 28.7 64 64c0 3.5-.3 6.8-.8 10.1zm31.6 5c.8-4.9 1.2-10 1.2-15.1c0-53-43-96-96-96s-96 43-96 96c0 5.1 .4 10.2 1.2 15.1C397.1 125.7 384 149.3 384 176c0 44.2 35.8 80 80 80l32 0 0 240c0 8.8 7.2 16 16 16s16-7.2 16-16l0-240 32 0c44.2 0 80-35.8 80-80c0-26.7-13.1-50.3-33.2-64.9zM64 224l256 0 0 64-16 0L80 288l-16 0 0-64zm0 96l0 48-16 0-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96 16 0 224 0 16 0 0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0-16 0 0-48c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L64 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32zm224 0l0 48L96 368l0-48 192 0z" />
    </Icon>
);

export default BenchTree;