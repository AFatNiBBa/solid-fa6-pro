
import { Icon } from "../../index";

/**
 * A component that renders the `leaf` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/leaf?s=sharp-thin leaf}
 * @preview ![leaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/leaf.svg)
 */
const Leaf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M97.1 252.5C106.8 164.5 181.4 96 272 96c0 0 0 0 0 0l16 0 88 0c42.3 0 79.1-23.4 98.2-58.1c3.6-6.5 6.5-13.3 8.8-20.5c3.1 7 6 14.2 8.7 21.5c13.1 36 20.4 75.8 20.4 117.6C512 317.1 405.1 447.3 273 448l-1 0c-97.1 0-175.9-78.7-176-175.8C47.7 305.3 16 361 16 424l0 48 0 8L0 480l0-8 0-48c0-72.8 38.9-136.5 97.1-171.5zm15.2 9.7c-.2 3.2-.3 6.5-.3 9.8c0 88.4 71.6 160 160 160c0 0 0 0 0 0l.9 0C393.5 431.4 496 311.3 496 156.6c0-35.1-5.3-68.5-15-99.3C457.8 90.3 419.5 112 376 112l-88 0s0 0 0 0l-16 0c-78.5 0-143.8 56.5-157.4 131.1C140.5 230.8 169.5 224 200 224l112 0 8 0 0 16-8 0-112 0c-31.8 0-61.6 8-87.7 22.2z" />
    </Icon>
);

export default Leaf;