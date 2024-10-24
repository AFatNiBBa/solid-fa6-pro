
import { Icon } from "../../index";

/**
 * A component that renders the `crate-empty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crate-empty?s=thin crate-empty}
 * @preview ![crate-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/crate-empty.svg)
 */
const CrateEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 376l0 80c0 22.1-17.9 40-40 40L56 496c-22.1 0-40-17.9-40-40l0-80 480 0zm0-16L16 360l0-80c0-22.1 17.9-40 40-40l400 0c22.1 0 40 17.9 40 40l0 80zm16 0l0-80c0-30.9-25.1-56-56-56L56 224c-30.9 0-56 25.1-56 56l0 80 0 8 0 8 0 80c0 30.9 25.1 56 56 56l400 0c30.9 0 56-25.1 56-56l0-80 0-8 0-8zM96 304a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm336 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM96 432a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm336 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default CrateEmpty;