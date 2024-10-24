
import { Icon } from "../../index";

/**
 * A component that renders the `circle-half` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half?s=sharp-light circle-half}
 * @preview ![circle-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-half.svg)
 */
const CircleHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 34.3l0 443.5C115.4 462.2 32 368.8 32 256S115.4 49.8 224 34.3zM224 2C97.7 17.7 0 125.5 0 256S97.7 494.3 224 510c10.5 1.3 21.2 2 32 2l0-32 0-448 0-32c-10.8 0-21.5 .7-32 2z" />
    </Icon>
);

export default CircleHalf;