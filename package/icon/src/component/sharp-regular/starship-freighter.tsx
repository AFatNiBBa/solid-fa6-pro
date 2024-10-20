
import { Icon } from "../../index";

/**
 * A component that renders the `starship-freighter` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starship-freighter?s=sharp-regular starship-freighter}
 * @preview ![starship-freighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/starship-freighter.svg)
 */
const StarshipFreighter: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M400 256c0-97.2-78.8-176-176-176S48 158.8 48 256s78.8 176 176 176c14.8 0 29.1-1.8 42.8-5.2L208 350.7c-45.4-7.6-80-47.1-80-94.7c0-53 43-96 96-96s96 43 96 96c0 1.3 0 2.7-.1 4l60 77.7C392.7 313.3 400 285.5 400 256zm40 112l3.6 0L528 335.2l0-55.2-81.3 0c-3.4 31.8-13.4 61.6-28.7 88l22 0zm6.7-136l81.3 0 0-55.2-118.2-46c19.9 29.5 32.9 63.9 36.9 101.1zM576 368l-64 24.9L512 512l-72 0-72 0-35.4 0L311 484l-9.9-12.9C275.9 477 250 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32c42.3 0 84.2 7.9 123.6 23.2L576 144l0 112 0 112zM88 240a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm16-80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 176a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm152-80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm77 198.7l7.2 9.3 11.8 0 72 0 24 0 0-48-24 0-60.2 0L300.7 313.7c-9.7 12.9-22.6 23.3-37.5 30l85.8 111z" />
    </Icon>
);

export default StarshipFreighter;