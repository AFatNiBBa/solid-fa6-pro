
import { Icon } from "../../index";

/**
 * A component that renders the `dice` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice?s=sharp-regular dice}
 * @preview ![dice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dice.svg)
 */
const Dice: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M33.9 257.9L0 224l33.9-33.9L190.1 33.9 224 0l33.9 33.9L414.1 190.1 448 224l-33.9 33.9L257.9 414.1 224 448l-33.9-33.9L33.9 257.9zM67.9 224L224 380.1 380.1 224 224 67.9 67.9 224zM320 512l0-114.7L470.6 246.6 493.3 224l-22.6-22.6-9.4-9.4L640 192l0 320-320 0zM480 376a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM224 160a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm-88 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm88 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 136a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm88-136a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Dice;