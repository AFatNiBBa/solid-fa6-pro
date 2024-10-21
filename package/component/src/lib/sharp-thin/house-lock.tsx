
import { Icon } from "../../index";

/**
 * A component that renders the `house-lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-lock?s=sharp-thin house-lock}
 * @preview ![house-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/house-lock.svg)
 */
const HouseLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 5.5l5.2 4.5L482 171.7c-4.9 2.7-9.5 5.8-13.8 9.2L288 26.5 80 204.8 80 496l128 0 0-184 0-8 8 0 144 0 8 0 0 8 0 184 16 0 0 16L72 512l-8 0 0-8 0-285.5L13.2 262.1 2.8 249.9l280-240L288 5.5zM224 496l128 0 0-176-128 0 0 176zM528 208c-26.5 0-48 21.5-48 48l0 64 96 0 0-64c0-26.5-21.5-48-48-48zm-64 48c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64 32 0 16 0 0 16 0 160 0 16-16 0-192 0-16 0 0-16 0-160 0-16 16 0 32 0 0-64zm-32 80l0 160 192 0 0-160-32 0-16 0-96 0-16 0-32 0z" />
    </Icon>
);

export default HouseLock;