
import { Icon } from "../../index";

/**
 * A component that renders the `keynote` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keynote?s=sharp-thin keynote}
 * @preview ![keynote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/keynote.svg)
 */
const Keynote: typeof Icon = x => (
    <Icon {...x}>
        <path d="M312 16c13.3 0 24 10.7 24 24s-10.7 24-24 24L208 64l0-48 104 0zM208 0L192 0l0 16 0 16-8 0c-39.8 0-72 32.2-72 72l0 40-48 0L0 272l0 24 0 56 0 16 16 0 480 0 16 0 0-16 0-56 0-24L448 144l-320 0 0-40c0-30.9 25.1-56 56-56l8 0 0 16 0 16 16 0 104 0c22.1 0 40-17.9 40-40s-17.9-40-40-40L208 0zM16 352l0-48 480 0 0 48L16 352zm0-64l0-12.2L73.9 160l38.1 0 16 0 310.1 0L496 275.8l0 12.2L16 288zM128 496l0 16 8 0 120 0 120 0 8 0 0-16-8 0-112 0 0-96-16 0 0 96-112 0-8 0z" />
    </Icon>
);

export default Keynote;