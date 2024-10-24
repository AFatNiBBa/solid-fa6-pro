
import { Icon } from "../../index";

/**
 * A component that renders the `typewriter` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/typewriter?s=sharp-thin typewriter}
 * @preview ![typewriter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/typewriter.svg)
 */
const Typewriter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 0l0 8 0 152 16 0L80 16l292.7 0L432 75.3l0 84.7 16 0 0-88 0-3.3-2.3-2.3-64-64L379.3 0 376 0 72 0 64 0zM331.3 235.3L358.6 208 496 208l0 64L16 272l0-64 137.4 0 27.3 27.3c3 3 7.1 4.7 11.3 4.7l128 0c4.2 0 8.3-1.7 11.3-4.7zM352 192l-32 32-128 0-32-32L16 192 0 192l0 16 0 64 0 16 16 0 16 0 0 208 0 16 16 0 416 0 16 0 0-16 0-208 16 0 16 0 0-16 0-64 0-16-16 0-144 0zm112 96l0 208L48 496l0-208 416 0zM160 448l-8 0 0 16 8 0 192 0 8 0 0-16-8 0-192 0zM112 320l0 32 32 0 0-32-32 0zm64 64l-32 0 0 32 32 0 0-32zm32-64l-32 0 0 32 32 0 0-32zm32 64l-32 0 0 32 32 0 0-32zm0-64l0 32 32 0 0-32-32 0zm64 64l-32 0 0 32 32 0 0-32zm32-64l-32 0 0 32 32 0 0-32zm32 96l0-32-32 0 0 32 32 0zm0-96l0 32 32 0 0-32-32 0z" />
    </Icon>
);

export default Typewriter;