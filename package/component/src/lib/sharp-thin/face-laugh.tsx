
import { Icon } from "../../index";

/**
 * A component that renders the `face-laugh` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-laugh?s=sharp-thin face-laugh}
 * @preview ![face-laugh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-laugh.svg)
 */
const FaceLaugh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 416c66.8 0 123-47.7 137.3-112l-274.6 0C133 368.3 189.2 416 256 416zM100 288l16.1 0 279.8 0 16.1 0c-.5 5.4-1.3 10.8-2.4 16C395.1 377 331.8 432 256 432s-139.1-55-153.6-128c-1-5.2-1.8-10.6-2.4-16zm60.4-96a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default FaceLaugh;