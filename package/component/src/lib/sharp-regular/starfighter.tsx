
import { Icon } from "../../index";

/**
 * A component that renders the `starfighter` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starfighter?s=sharp-regular starfighter}
 * @preview ![starfighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/starfighter.svg)
 */
const Starfighter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M258.8 0L280 0l80 0 21.2 0 2.6 21 27.4 219 76.8 0 24 0 0 24 0 88 56 0 0-184-24 0 0-48 24 0 0-24 0-24 48 0 0 24 0 24 24 0 0 48-24 0 0 280 0 24-48 0 0-24 0-2.7L512 464l0 16-24 0-8 0 0 32-64 0 0-32-24 0-24 0-96 0-24 0-24 0 0 32-64 0 0-32-8 0-24 0 0-16L72 445.3l0 2.7 0 24-48 0 0-24 0-280L0 168l0-48 24 0 0-24 0-24 48 0 0 24 0 24 24 0 0 48-24 0 0 184 56 0 0-88 0-24 24 0 76.8 0L256.2 21l2.6-21zM368 432l0-150.5L338.8 48l-37.6 0L272 281.5 272 432l96 0zm48 0l48 0 0-144-48 0 0 144zM224 288l-48 0 0 144 48 0 0-144zm96-64c17.7 0 32 14.3 32 32l0 64-64 0 0-64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Starfighter;