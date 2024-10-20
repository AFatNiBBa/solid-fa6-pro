
import { Icon } from "../../index";

/**
 * A component that renders the `tree-decorated` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-decorated?s=sharp-light tree-decorated}
 * @preview ![tree-decorated](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tree-decorated.svg)
 */
const TreeDecorated: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M392 224l-8.7 0L360 224l-16 0 22.9 32L424 336l0 32-16.7 0L392 368l-24 0 22.9 32L448 480l0 32-32 0L32 512 0 512l0-32 57.1-80L80 368l-24 0-15.3 0L24 368l0-32 57.1-80L104 224l-16 0-23.3 0L56 224l0-32L202.7 24.3 224 0l21.3 24.3L392 192l0 32zM224 48.6L98.5 192l5.5 0 62.2 0L130 242.6 63.3 336 80 336l62.2 0L106 386.6 39.3 480l369.4 0L342 386.6 305.8 336l62.2 0 16.7 0L318 242.6 281.8 192l62.2 0 5.5 0L224 48.6zM184 264a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32-104a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm72 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default TreeDecorated;