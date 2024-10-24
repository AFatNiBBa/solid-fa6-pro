
import { Icon } from "../../index";

/**
 * A component that renders the `shapes` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shapes?s=sharp-thin shapes}
 * @preview ![shapes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/shapes.svg)
 */
const Shapes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 224l18.4 0 219.1 0 18.4 0-9.1-16L297.2 16.1 288 0l-9.2 16.1L169.1 208 160 224zM288 32.2L388.4 208l-200.9 0L288 32.2zM128 272a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 240a128 128 0 1 0 0-256 128 128 0 1 0 0 256zM496 288l0 192-192 0 0-192 192 0zM304 272l-16 0 0 16 0 192 0 16 16 0 192 0 16 0 0-16 0-192 0-16-16 0-192 0z" />
    </Icon>
);

export default Shapes;