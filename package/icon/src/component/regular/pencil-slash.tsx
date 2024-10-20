
import { Icon } from "../../index";

/**
 * A component that renders the `pencil-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pencil-slash?s=regular pencil-slash}
 * @preview ![pencil-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pencil-slash.svg)
 */
const PencilSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L409.9 296 556.7 149.3c21.9-21.9 24.6-55.6 8.2-80.5c-2.3-3.5-5.1-6.9-8.2-10L517.3 19.3c-25-25-65.5-25-90.5 0L264.3 181.8 38.8 5.1zM302.3 211.6L385 129 447 191l-75.1 75.1-69.6-54.5zm.9 123.2l-41.7 41.7-49.6-12.4-12.4-49.6 34.4-34.4-38-29.9-73.2 73.2c-2.5 2.5-4.9 5.2-7.1 8l-.8 .5 .2 .3c-6.5 8.5-11.4 18.2-14.5 28.6L77.4 439 65 481.2c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1L137 498.6l78.1-23c10.4-3 20.1-8 28.6-14.5l.3 .2 .5-.8c1.4-1.1 2.7-2.2 4-3.3c1.4-1.2 2.7-2.5 4-3.8l88.6-88.6-38-29.9zM161 358.9l7.7 31c2.1 8.6 8.9 15.3 17.5 17.5l31 7.7-7.4 11.2c-2.6 1.4-5.3 2.6-8.1 3.4l-23.4 6.9-54.8 16.1 16.1-54.8 6.9-23.4c.8-2.8 2-5.6 3.4-8.1l11.1-7.4z" />
    </Icon>
);

export default PencilSlash;