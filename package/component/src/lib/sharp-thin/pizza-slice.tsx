
import { Icon } from "../../index";

/**
 * A component that renders the `pizza-slice` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pizza-slice?s=sharp-thin pizza-slice}
 * @preview ![pizza-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pizza-slice.svg)
 */
const PizzaSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M4.4 494.4L0 512l17.6-4.4L407.8 410l16.1-4L512 384C512 171.9 340.1 0 128 0L106 88.1l-4 16.1L4.4 494.4zM495.8 371.6l-72 18c-5.4-164-137.4-296-301.4-301.4l18-72c193.4 6.4 348.9 162 355.4 355.4zm-87.9 22L22 490l96.5-385.9c158.3 3.4 286.1 131.1 289.5 289.5zM176 280a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm-24-40a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm160 96a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm-40-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM144 408a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm-24-40a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default PizzaSlice;