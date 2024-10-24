
import { Icon } from "../../index";

/**
 * A component that renders the `candy-bar` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-bar?s=thin candy-bar}
 * @preview ![candy-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/candy-bar.svg)
 */
const CandyBar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M165.2 70c.9-3.5 4.1-6 7.7-6l147 0 8 0 8 0 240 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-240 0-8 0-8 0L56 448c-30.9 0-56-25.1-56-56L0 237c0-3.7 2.5-6.8 6-7.7C44 219.5 72 185 72 144c0-4.4 3.6-8 8-8c41 0 75.5-28 85.2-66zM184 80l0 112 136 0 0-112L184 80zm-16 23.4c-17.1 27.1-46.5 45.8-80.3 48.3c-1.1 14.4-5.1 28.1-11.4 40.3l91.7 0 0-88.6zM66 208c-12.7 16.2-30 28.5-50 35l0 77 152 0 0-112L66 208zM16 336l0 56c0 22.1 17.9 40 40 40l112 0 0-96L16 336zm168 96l136 0 0-96-136 0 0 96zM336 320l0 16 0 96 240 0c26.5 0 48-21.5 48-48l0-256c0-26.5-21.5-48-48-48L336 80l0 112 0 16 0 112zM320 208l-136 0 0 112 136 0 0-112z" />
    </Icon>
);

export default CandyBar;