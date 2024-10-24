
import { Icon } from "../../index";

/**
 * A component that renders the `star-sharp` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp?s=regular star-sharp}
 * @preview ![star-sharp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/star-sharp.svg)
 */
const StarSharp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 0c10.5 0 19.7 6.8 22.9 16.7L361.5 176 520 176c10.3 0 19.4 6.5 22.7 16.2s.1 20.4-8 26.7L403.9 320.7l50.9 160.1c3.2 10-.5 21-9.1 27s-20.2 5.7-28.5-.7L288 406.4 158.7 506.9c-8.3 6.5-19.8 6.8-28.5 .7s-12.3-16.9-9.1-27l50.9-160.1L41.3 218.9c-8.1-6.3-11.3-17-8-26.7S45.7 176 56 176l158.5 0L265.1 16.7C268.3 6.8 277.5 0 288 0zm0 103.2L254.9 207.3c-3.2 10-12.4 16.7-22.9 16.7l-106.1 0 88.8 69.1c7.9 6.2 11.2 16.6 8.1 26.2L190.3 421.6l82.9-64.5c8.7-6.7 20.8-6.7 29.5 0l82.9 64.5L353.1 319.3c-3-9.6 .2-20 8.1-26.2L450.1 224 344 224c-10.5 0-19.7-6.8-22.9-16.7L288 103.2z" />
    </Icon>
);

export default StarSharp;