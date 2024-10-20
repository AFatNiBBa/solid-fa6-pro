
import { Icon } from "../../index";

/**
 * A component that renders the `tree` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree?s=sharp-thin tree}
 * @preview ![tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tree.svg)
 */
const Tree: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M229.7 7.1L224 1.5l-5.7 5.7-152 152L64 161.5l0 3.3L64 184l0 8 8 0 52.7 0L34.3 282.3 32 284.7l0 3.3 0 24 0 8 8 0 52.7 0L2.3 410.3 0 412.7 0 416l0 24 0 8 8 0 144 0 8 0 56 0 0 56 0 8 16 0 0-8 0-56 56 0 8 0 144 0 8 0 0-8 0-24 0-3.3-2.3-2.3L355.3 320l52.7 0 8 0 0-8 0-24 0-3.3-2.3-2.3L323.3 192l52.7 0 8 0 0-8 0-19.2 0-3.3-2.3-2.3-152-152zM232 432l0-232 0-8-16 0 0 8 0 232-56 0-8 0L16 432l0-12.7L117.7 317.7 131.3 304 112 304l-64 0 0-12.7L149.7 189.7 163.3 176 144 176l-64 0 0-7.9 144-144 144 144 0 7.9-64 0-19.3 0 13.7 13.7L400 291.3l0 12.7-64 0-19.3 0 13.7 13.7L432 419.3l0 12.7-136 0-8 0-56 0z" />
    </Icon>
);

export default Tree;