
import { Icon } from "../../index";

/**
 * A component that renders the `medal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/medal?s=sharp-light medal}
 * @preview ![medal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/medal.svg)
 */
const Medal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 0L38.5 0 0 0 21.3 32l98.1 147.1c8-7 16.6-13.4 25.7-19.1L59.8 32l83.1 0 67.4 101c11.4-2.6 23.2-4.2 35.3-4.8l-8.7-13.1L160 0zM392.6 179.1L490.7 32 512 0 473.5 0 352 0 275.2 115.2l-8.7 13.1c12.1 .6 23.8 2.2 35.3 4.8L369.1 32l83.1 0L366.9 160c9.1 5.7 17.7 12.1 25.7 19.1zM256 192a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 320a176 176 0 1 0 0-352 176 176 0 1 0 0 352zm14.3-271.1L256 211.8l-14.3 29.1-22.1 44.9L170 293l-32.1 4.7 23.2 22.6L197 355.2l-8.5 49.3-5.5 32 28.7-15.1L256 398.1l44.3 23.3L329 436.4l-5.5-32L315 355.2l35.8-34.9 23.2-22.6L342 293l-49.5-7.2-22.1-44.9zm-25.9 66.6L256 284.2l11.5 23.3 3.7 7.5 8.3 1.2 25.7 3.7-18.6 18.2-6 5.9 1.4 8.3 4.4 25.6-23-12.1-7.4-3.9-7.4 3.9-23 12.1 4.4-25.6 1.4-8.3-6-5.9L206.7 320l25.7-3.7 8.3-1.2 3.7-7.5z" />
    </Icon>
);

export default Medal;