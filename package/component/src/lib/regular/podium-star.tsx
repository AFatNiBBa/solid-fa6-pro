
import { Icon } from "../../index";

/**
 * A component that renders the `podium-star` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podium-star?s=regular podium-star}
 * @preview ![podium-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/podium-star.svg)
 */
const PodiumStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M182.4 72c8.3 14.3 23.8 24 41.6 24l64 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L224 0c-17.8 0-33.3 9.7-41.6 24L168 24c-48.6 0-88 39.4-88 88l0 32-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-296 0 0-32c0-22.1 17.9-40 40-40l14.4 0zM47.3 224L73.5 455.2c3.7 32.3 31 56.8 63.6 56.8l173.7 0c32.6 0 59.9-24.4 63.6-56.8L400.7 224l-48.3 0L326.8 449.8c-.9 8.1-7.8 14.2-15.9 14.2l-173.7 0c-8.1 0-15-6.1-15.9-14.2L95.6 224l-48.3 0zm201.5 77.7l-18.2-41.3c-2.6-5.8-10.5-5.8-13.1 0l-18.2 41.3c-1.1 2.4-3.2 4-5.7 4.3l-43.2 5.4c-6.1 .8-8.6 8.7-4 13l31.9 30.9c1.8 1.8 2.7 4.4 2.2 7L171.9 407c-1.2 6.3 5.2 11.2 10.6 8.1l37.9-22.2c2.2-1.3 4.9-1.3 7 0L265.5 415c5.4 3.1 11.8-1.7 10.6-8.1l-8.5-44.6c-.5-2.6 .3-5.2 2.2-7l31.9-30.9c4.5-4.4 2.1-12.3-4-13L254.5 306c-2.5-.3-4.6-2-5.7-4.3z" />
    </Icon>
);

export default PodiumStar;