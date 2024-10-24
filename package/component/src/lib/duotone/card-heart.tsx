
import { Icon, generic } from "../../index";

/**
 * A component that renders the `card-heart` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-heart?s=duotone card-heart}
 * @preview ![card-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/card-heart.svg)
 */
const CardHeart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64zM97.4 264.3C72.9 239 74.2 197 101.7 173.4c23.6-20.5 59.9-16.6 81.7 5.7l8.7 9.2 8.3-9.2c21.8-22.3 57.7-26.2 82.2-5.7c27.1 23.6 28.4 65.6 3.9 90.9l-84.3 87.4c-2.8 2.8-6.6 4.3-10.2 4.3s-7.3-1.4-9.9-4.3L97.4 264.3z" />
        <path d="M286.6 264.3l-84.3 87.4c-5.7 5.7-14.9 5.7-20.1 0L97.4 264.3C72.9 239 74.2 197 101.7 173.4c23.6-20.5 59.9-16.6 81.7 5.7l8.7 9.2 8.3-9.2c21.8-22.3 57.7-26.2 82.2-5.7c27.1 23.6 28.4 65.6 3.9 90.9z" />
    </Icon>
);

export default CardHeart;