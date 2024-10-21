
import { Icon } from "../../index";

/**
 * A component that renders the `baguette` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baguette?s=sharp-thin baguette}
 * @preview ![baguette](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/baguette.svg)
 */
const Baguette: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M605.2 65.9C570.9 14.4 501.3 .5 449.9 34.8L361.2 93.9l60.4 60.4 5.7 5.7L416 171.3l-5.7-5.7L347.6 103 246 170.7l63.6 63.6 5.7 5.7L304 251.3l-5.7-5.7-65.9-65.9L130.8 247.5l66.8 66.8 5.7 5.7L192 331.3l-5.7-5.7-69.1-69.1L65.9 290.8C14.4 325.1 .5 394.7 34.8 446.1s103.8 65.4 155.3 31.1l384-256c51.5-34.3 65.4-103.8 31.1-155.3zM618.5 57c39.2 58.8 23.3 138.3-35.5 177.5l-384 256C140.2 529.7 60.7 513.8 21.5 455S-1.8 316.7 57 277.5l384-256C499.8-17.7 579.3-1.8 618.5 57z" />
    </Icon>
);

export default Baguette;