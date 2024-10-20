
import { Icon } from "../../index";

/**
 * A component that renders the `bench-tree` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bench-tree?s=solid bench-tree}
 * @preview ![bench-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bench-tree.svg)
 */
const BenchTree: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 96c0 5.1-.4 10.2-1.2 15.1C626.9 125.7 640 149.3 640 176c0 44.2-35.8 80-80 80l-16 0 0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224-16 0c-44.2 0-80-35.8-80-80c0-26.7 13.1-50.3 33.2-64.9c-.8-4.9-1.2-10-1.2-15.1c0-53 43-96 96-96s96 43 96 96zM32 224c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L64 320c-17.7 0-32-14.3-32-32l0-64zm0 128l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64L96 416l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default BenchTree;