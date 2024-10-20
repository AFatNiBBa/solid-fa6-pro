
import { Icon } from "../../index";

/**
 * A component that renders the `shapes` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shapes?s=regular shapes}
 * @preview ![shapes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shapes.svg)
 */
const Shapes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 63.1L220.3 176l135.5 0L288 63.1zM411.4 175.5c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2l-192 0c-11.5 0-22.2-6.2-27.8-16.2s-5.5-22.3 .4-32.2l96-160C266.3 5.9 276.8 0 288 0s21.7 5.9 27.4 15.5l96 160zM464 320l-128 0 0 128 128 0 0-128zM328 272l144 0c22.1 0 40 17.9 40 40l0 144c0 22.1-17.9 40-40 40l-144 0c-22.1 0-40-17.9-40-40l0-144c0-22.1 17.9-40 40-40zM208 384A80 80 0 1 0 48 384a80 80 0 1 0 160 0zM0 384a128 128 0 1 1 256 0A128 128 0 1 1 0 384z" />
    </Icon>
);

export default Shapes;