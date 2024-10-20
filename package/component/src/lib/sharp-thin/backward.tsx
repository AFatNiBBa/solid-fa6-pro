
import { Icon } from "../../index";

/**
 * A component that renders the `backward` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward?s=sharp-thin backward}
 * @preview ![backward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/backward.svg)
 */
const Backward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M14.4 265.6L0 256l14.4-9.6L272 74.7 288 64l0 19.2 0 115.2L496 73.6 512 64l0 18.7 0 346.7 0 18.7-16-9.6L288 313.6l0 115.2 0 19.2-16-10.7L14.4 265.6zM288 294.9L496 419.7l0-327.5L288 217.1l0 77.9zM272 418.1l0-324.2L28.8 256 272 418.1z" />
    </Icon>
);

export default Backward;