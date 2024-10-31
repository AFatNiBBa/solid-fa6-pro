
import { Icon } from "../../index";

/**
 * A component that renders the `house-heart` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-heart?s=thin house-heart}
 * @preview ![house-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/house-heart.svg)
 */
const HouseHeart: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M293.3 2c-3-2.7-7.6-2.7-10.6 0L2.7 250c-3.3 2.9-3.6 8-.7 11.3s8 3.6 11.3 .7L64 217.1 64 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-230.9L562.7 262c3.3 2.9 8.4 2.6 11.3-.7s2.6-8.4-.7-11.3L293.3 2zM80 448l0-245.1L288 18.7 496 202.9 496 448c0 26.5-21.5 48-48 48l-320 0c-26.5 0-48-21.5-48-48zM192 281.9c0-23.2 18.8-41.9 41.9-41.9c11.1 0 21.8 4.4 29.7 12.3L282.3 271c1.5 1.5 3.5 2.3 5.7 2.3s4.2-.8 5.7-2.3l18.7-18.7c7.9-7.9 18.5-12.3 29.7-12.3c23.2 0 41.9 18.8 41.9 41.9l0 .6c0 10.6-4 20.9-11.2 28.8l-78.9 86.1c-1.5 1.7-3.7 2.6-5.9 2.6s-4.4-.9-5.9-2.6l-78.9-86.1c-7.2-7.8-11.2-18.1-11.2-28.8l0-.6zM233.9 224c-32 0-57.9 25.9-57.9 57.9l0 .6c0 14.7 5.5 28.8 15.4 39.6l78.9 86.1c4.5 5 11 7.8 17.7 7.8s13.1-2.8 17.7-7.8l78.9-86.1c9.9-10.8 15.4-24.9 15.4-39.6l0-.6c0-32-25.9-57.9-57.9-57.9c-15.4 0-30.1 6.1-41 17L288 254.1 274.9 241c-10.9-10.9-25.6-17-41-17z" />
    </Icon>
);

export default HouseHeart;