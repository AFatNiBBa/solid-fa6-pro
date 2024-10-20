
import { Icon } from "../../index";

/**
 * A component that renders the `candy-bar` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-bar?s=sharp-thin candy-bar}
 * @preview ![candy-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/candy-bar.svg)
 */
const CandyBar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M166.8 64l6.2 0 147 0 8 0 8 0 288 0 16 0 0 16 0 352 0 16-16 0-288 0-8 0-8 0L8 448l-8 0 0-8L0 237l0-6.2 6-1.5C44 219.5 72 185 72 144l0-8 8 0c41 0 75.5-28 85.2-66l1.5-6zM184 80l0 112 136 0 0-112L184 80zm-16 23.4c-17.1 27.1-46.5 45.8-80.3 48.3c-1.1 14.4-5.1 28.1-11.4 40.3l91.7 0 0-88.6zM66 208c-12.7 16.2-30 28.5-50 35l0 77 152 0 0-112L66 208zM16 336l0 96 152 0 0-96L16 336zm168 96l136 0 0-96-136 0 0 96zM336 320l0 16 0 96 288 0 0-352L336 80l0 112 0 16 0 112zM320 208l-136 0 0 112 136 0 0-112z" />
    </Icon>
);

export default CandyBar;