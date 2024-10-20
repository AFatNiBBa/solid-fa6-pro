
import { Icon } from "../../index";

/**
 * A component that renders the `box-heart` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-heart?s=sharp-thin box-heart}
 * @preview ![box-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/box-heart.svg)
 */
const BoxHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M17.5 176L216 176l0-128L74.4 48 17.5 176zm413 0L373.6 48 232 48l0 128 198.5 0zM16 192l0 272 416 0 0-272L16 192zM64 32l320 0 64 144 0 288 0 16-16 0L16 480 0 480l0-16L0 176 64 32zm77.7 226.2c-17.4 17.4-17 45.9 1 62.7L224 397l81.3-76.1c18-16.9 18.5-45.3 1-62.7c-17.1-17.1-44.7-17.1-61.8 0l-14.9 14.9-5.7 5.7-5.7-5.7-14.9-14.9c-17.1-17.1-44.7-17.1-61.8 0zm73.1-11.3l9.2 9.2 9.2-9.2c23.3-23.3 61.1-23.3 84.4 0c23.8 23.8 23.2 62.7-1.4 85.7l-86.7 81.2L224 419l-5.5-5.1-86.7-81.2c-24.6-23-25.3-61.9-1.4-85.7c23.3-23.3 61.1-23.3 84.4 0z" />
    </Icon>
);

export default BoxHeart;