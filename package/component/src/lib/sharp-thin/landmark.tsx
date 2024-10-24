
import { Icon } from "../../index";

/**
 * A component that renders the `landmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark?s=sharp-thin landmark}
 * @preview ![landmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/landmark.svg)
 */
const Landmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 144l480 0 0-21.5L256 17.5 16 122.5 16 144zM0 112L256 0 512 112l0 32 0 16-16 0L16 160 0 160l0-16 0-32zm80 88l0 168 104 0 0-168 0-8 16 0 0 8 0 168 112 0 0-168 0-8 16 0 0 8 0 168 104 0 0-168 0-8 16 0 0 8 0 176 0 8-8 0-112 0-16 0-112 0-16 0L72 384l-8 0 0-8 0-176 0-8 16 0 0 8zM40 432l432 0 8 0 0 16-8 0L40 448l-8 0 0-16 8 0zM8 496l496 0 8 0 0 16-8 0L8 512l-8 0 0-16 8 0z" />
    </Icon>
);

export default Landmark;