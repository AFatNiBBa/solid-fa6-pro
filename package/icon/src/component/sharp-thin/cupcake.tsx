
import { Icon } from "../../index";

/**
 * A component that renders the `cupcake` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cupcake?s=sharp-thin cupcake}
 * @preview ![cupcake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cupcake.svg)
 */
const Cupcake: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 0L193.1 0l8.3 12.4 10.8 16.3c2.5 3.7 3.8 8.1 3.8 12.6C216 53.8 205.8 64 193.3 64L152 64c-35.3 0-64 28.7-64 64l-8 0c-44.2 0-80 35.8-80 80l0 72 0 8 8 0 432 0 8 0 0-8 0-72c0-44.2-35.8-80-80-80l-8.1 0c0-.9 .1-1.8 .1-2.7C360 56.1 303.9 0 234.7 0L208 0zm17.5 19.8L222.9 16l11.7 0C295 16 344 65 344 125.3c0 3.2-.3 6.2-.8 9.2l-1.7 9.4 9.6 0 17 0c35.3 0 64 28.7 64 64l0 64L16 272l0-64c0-35.3 28.7-64 64-64l16.6 0 9.2 0-1.3-9.1c-.3-2.2-.5-4.5-.5-6.9c0-26.5 21.5-48 48-48l41.3 0C214.7 80 232 62.7 232 41.3c0-7.6-2.3-15.1-6.5-21.5zM96 512l256 0 27.4-192-16.2 0L338.1 496 272 496l14.7-176-16.1 0L256 495.3c0 .2 0 .4 0 .7l-64 0c0-.2 0-.4 0-.7L177.4 320l-16.1 0L176 496l-66.1 0L84.7 320l-16.2 0L96 512z" />
    </Icon>
);

export default Cupcake;