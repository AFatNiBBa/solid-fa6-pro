
import { Icon } from "../../index";

/**
 * A component that renders the `swatchbook` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swatchbook?s=sharp-thin swatchbook}
 * @preview ![swatchbook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/swatchbook.svg)
 */
const Swatchbook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 416c0 53 43 96 96 96s96-43 96-96L192 8l0-8-8 0L8 0 0 0 0 8 0 416zm96 80c-44.2 0-80-35.8-80-80L16 16l160 0 0 400c0 44.2-35.8 80-80 80zm408 16l8 0 0-8 0-176 0-8-8 0-146.1 0-16 16L496 336l0 160-300.1 0c-4.6 5.8-9.7 11.1-15.3 16L504 512zM223.8 423.3L453 194.1l5.7-5.7-5.7-5.7L328.5 58.3l-5.7-5.7-5.7 5.7L224 151.5l0 22.6 98.8-98.8L436 188.5l-212 212 0 15.6c0 2.4-.1 4.9-.2 7.3zM64 48L48 48l0 16 0 64 0 16 16 0 64 0 16 0 0-16 0-64 0-16-16 0L64 48zm0 16l16 0 32 0 16 0 0 16 0 32 0 16-16 0-32 0-16 0 0-16 0-32 0-16zM48 176l0 16 0 64 0 16 16 0 64 0 16 0 0-16 0-64 0-16-16 0-64 0-16 0zm32 16l32 0 16 0 0 16 0 32 0 16-16 0-32 0-16 0 0-16 0-32 0-16 16 0zm32 224a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM96 384a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default Swatchbook;