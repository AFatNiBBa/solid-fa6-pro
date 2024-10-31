
import { Icon } from "../../index";

/**
 * A component that renders the `shapes` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shapes?s=thin shapes}
 * @preview ![shapes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/shapes.svg)
 */
const Shapes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M301.7 23.8c-2.9-4.8-8.1-7.8-13.7-7.8s-10.8 2.9-13.7 7.8l-96 160c-3 4.9-3 11.1-.2 16.1s8.2 8.1 13.9 8.1l192 0c5.8 0 11.1-3.1 13.9-8.1s2.8-11.2-.2-16.1l-96-160zM288 0c11.2 0 21.7 5.9 27.4 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2l-192 0c-11.5 0-22.2-6.2-27.8-16.2s-5.5-22.3 .4-32.2l96-160C266.3 5.9 276.8 0 288 0zM472 288l-144 0c-13.3 0-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24l144 0c13.3 0 24-10.7 24-24l0-144c0-13.3-10.7-24-24-24zM328 272l144 0c22.1 0 40 17.9 40 40l0 144c0 22.1-17.9 40-40 40l-144 0c-22.1 0-40-17.9-40-40l0-144c0-22.1 17.9-40 40-40zM240 384A112 112 0 1 0 16 384a112 112 0 1 0 224 0zM0 384a128 128 0 1 1 256 0A128 128 0 1 1 0 384z" />
    </Icon>
);

export default Shapes;