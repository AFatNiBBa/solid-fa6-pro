
import { Icon } from "../../index";

/**
 * A component that renders the `ranking-star` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ranking-star?s=sharp-light ranking-star}
 * @preview ![ranking-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ranking-star.svg)
 */
const RankingStar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M334.1 31.1l-14.3-28-14.3 28L282.8 75.8l-49.5 7.9-30.9 4.9 22.1 22.2 35.4 35.5-7.8 49.6-4.9 31 27.9-14.2 44.7-22.7 44.7 22.7 27.9 14.2-4.9-31-7.8-49.6 35.4-35.5 22.1-22.2-30.9-4.9-49.5-7.9L334.1 31.1zM307.6 97.6l12.2-24 12.2 24 3.7 7.3 8 1.3 26.6 4.2-19 19.1-5.7 5.8 1.3 8 4.2 26.6-24-12.2-7.3-3.7-7.3 3.7-24 12.2 4.2-26.6 1.3-8-5.7-5.8-19-19.1 26.6-4.2 8-1.3 3.7-7.3zM224 256l0 32 0 32 0 160 0 32 32 0 128 0 32 0 0-32 0-96 0-32 0-64 0-32-32 0-128 0-32 0zM384 480l-128 0 0-192 128 0 0 192zM0 320l0 32L0 480l0 32 32 0 128 0 32 0 0-32 0-128 0-32-32 0L32 320 0 320zM160 480L32 480l0-128 128 0 0 128zm320-64l128 0 0 64-128 0 0-64zm160-32l-32 0-128 0-32 0 0 32 0 64 0 32 32 0 128 0 32 0 0-32 0-64 0-32z" />
    </Icon>
);

export default RankingStar;