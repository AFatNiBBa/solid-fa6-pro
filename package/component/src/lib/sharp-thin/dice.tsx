
import { Icon } from "../../index";

/**
 * A component that renders the `dice` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice?s=sharp-thin dice}
 * @preview ![dice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/dice.svg)
 */
const Dice: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 224l11.3 11.3L212.7 436.7 224 448l11.3-11.3L436.7 235.3 448 224l-11.3-11.3L235.3 11.3 224 0 212.7 11.3 11.3 212.7 0 224zM224 425.4L22.6 224 224 22.6 425.4 224 224 425.4zm96-28.1l0 98.7 0 16 16 0 288 0 16 0 0-16 0-288 0-16-16 0-162.7 0 9.4 9.4 6.6 6.6L624 208l0 288-288 0 0-114.7-16 16zM192 120a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM120 240a16 16 0 1 1 0-32 16 16 0 1 1 0 32zM224 104a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM88 224a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm104 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 104a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32-88a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm104 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32zM224 312a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm72-88a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM496 352a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default Dice;