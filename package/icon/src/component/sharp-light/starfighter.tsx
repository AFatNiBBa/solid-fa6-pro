
import { Icon } from "../../index";

/**
 * A component that renders the `starfighter` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starfighter?s=sharp-light starfighter}
 * @preview ![starfighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/starfighter.svg)
 */
const Starfighter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M273.8 0l-1.7 14.1-32 264-.1 1 0 1 0 184 0 16 16 0 128 0 16 0 0-16 0-184 0-1-.1-1-32-264L366.2 0 352 0 288 0 273.8 0zm28.4 32l35.6 0L368 281l0 167-96 0 0-167L302.2 32zM64 96l0-16L32 80l0 16 0 32-16 0L0 128l0 32 16 0 16 0 0 288 0 16 32 0 0-16 0-19.3 64 26.7 0 8.7 0 16 16 0 48 0 0 16 0 16 32 0 0-16 0-32 0-16-16 0-48 0 0-160 48 0 16 0 0-32-16 0-64 0-16 0 0 16 0 48-64 0 0-160 16 0 16 0 0-32-16 0-16 0 0-32zm0 298l0-42 64 0 0 68.7L64 394zM608 96l0-16-32 0 0 16 0 32-16 0-16 0 0 32 16 0 16 0 0 160-64 0 0-48 0-16-16 0-64 0-16 0 0 32 16 0 48 0 0 160-48 0-16 0 0 16 0 32 0 16 32 0 0-16 0-16 48 0 16 0 0-16 0-8.7 64-26.7 0 19.3 0 16 32 0 0-16 0-288 16 0 16 0 0-32-16 0-16 0 0-32zM512 352l64 0 0 42-64 26.7 0-68.7zM320 224c-8.8 0-16 7.2-16 16l0 80 32 0 0-80c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default Starfighter;