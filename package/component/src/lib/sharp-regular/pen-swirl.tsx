
import { Icon } from "../../index";

/**
 * A component that renders the `pen-swirl` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-swirl?s=sharp-regular pen-swirl}
 * @preview ![pen-swirl](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pen-swirl.svg)
 */
const PenSwirl: typeof Icon = x => (
    <Icon {...x}>
        <path d="M330 137.9L374.1 182 265.7 290.4l-50.4 6.3 6.3-50.4L330 137.9zM425 199l17-17 36.1-36.1L512 112 478.1 78.1 433.9 33.9 400 0 366.1 33.9 330 70 313 87l-17 17L176 224l-9.9 78.9L160 352l49.1-6.1L288 336 408 216l17-17zm-17-50.9L363.9 104 400 67.9 444.1 112 408 148.1zM324.7 17.6C302.9 11.4 279.8 8 256 8C119 8 8 119 8 256S119 504 256 504l24 0 0-48-24 0C145.5 456 56 366.5 56 256S145.5 56 256 56c9.7 0 19.3 .7 28.7 2l40-40.4zM454.1 228.4c1.2 9 1.9 18.2 1.9 27.6c0 57.4-46.6 104-104 104l-24 0 0 48 24 0c83.9 0 152-68.1 152-152c0-23.6-3.3-46.4-9.4-68l-40.4 40.5z" />
    </Icon>
);

export default PenSwirl;