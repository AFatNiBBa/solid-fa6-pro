
import { Icon } from "../../index";

/**
 * A component that renders the `card-heart` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-heart?s=thin card-heart}
 * @preview ![card-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/card-heart.svg)
 */
const CardHeart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 16C37.5 16 16 37.5 16 64l0 384c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48L64 16zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM96 217.9l0 .6c0 10.6 4 20.9 11.2 28.8l78.9 86.1c1.5 1.7 3.7 2.6 5.9 2.6s4.4-.9 5.9-2.6l78.9-86.1c7.2-7.8 11.2-18.1 11.2-28.8l0-.6c0-23.2-18.8-41.9-41.9-41.9c-11.1 0-21.8 4.4-29.7 12.3L197.7 207c-1.5 1.5-3.5 2.3-5.7 2.3s-4.2-.8-5.7-2.3l-18.7-18.7c-7.9-7.9-18.5-12.3-29.7-12.3C114.8 176 96 194.8 96 217.9zM137.9 160c15.4 0 30.1 6.1 41 17L192 190.1 205.1 177c10.9-10.9 25.6-17 41-17c32 0 57.9 25.9 57.9 57.9l0 .6c0 14.7-5.5 28.8-15.4 39.6l-78.9 86.1c-4.5 5-11 7.8-17.7 7.8s-13.1-2.8-17.7-7.8L95.4 258.1C85.5 247.3 80 233.2 80 218.6l0-.6c0-32 25.9-57.9 57.9-57.9z" />
    </Icon>
);

export default CardHeart;