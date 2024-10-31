
import { Icon } from "../../index";

/**
 * A component that renders the `oven` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oven?s=sharp-thin oven}
 * @preview ![oven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/oven.svg)
 */
const Oven: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 16l0 144 416 0 0-144L16 16zM0 168L0 16 0 0 16 0 432 0l16 0 0 16 0 152 0 328 0 16-16 0L16 512 0 512l0-16L0 168zm432 8L16 176l0 320 416 0 0-320zM80 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM272 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM80 240l0 192 288 0 0-192L80 240zM64 224l16 0 288 0 16 0 0 16 0 192 0 16-16 0L80 448l-16 0 0-16 0-192 0-16zm64 64l8 0 176 0 8 0 0 16-8 0-176 0-8 0 0-16z" />
    </Icon>
);

export default Oven;