
import { Icon } from "../../index";

/**
 * A component that renders the `medal` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/medal?s=regular medal}
 * @preview ![medal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/medal.svg)
 */
const Medal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M4.1 38.2L106.4 191.5c11.2-11.6 23.7-21.9 37.3-30.6L68.4 48l64.5 0 54.9 91.5c15.8-5.5 32.4-9.1 49.6-10.6l-6.1-10.1L169.3 15.5C163.5 5.9 153.1 0 141.9 0L24.6 0C11 0 0 11 0 24.6c0 4.8 1.4 9.6 4.1 13.6zm276.6 80.5l-6.1 10.1c17.2 1.5 33.8 5.2 49.6 10.6L379.2 48l64.5 0L368.4 160.9c13.6 8.7 26.1 19 37.3 30.6L507.9 38.2c2.7-4 4.1-8.8 4.1-13.6C512 11 501 0 487.4 0L370.1 0c-11.2 0-21.7 5.9-27.4 15.5L280.8 118.7zM256 208a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 304a176 176 0 1 0 0-352 176 176 0 1 0 0 352zm7.2-257.5c-2.9-5.9-11.4-5.9-14.3 0l-19.2 38.9c-1.2 2.4-3.4 4-6 4.4L180.7 304c-6.6 1-9.2 9-4.4 13.6l31 30.2c1.9 1.8 2.7 4.5 2.3 7.1l-7.3 42.7c-1.1 6.5 5.7 11.5 11.6 8.4L252.3 386c2.3-1.2 5.1-1.2 7.4 0l38.4 20.2c5.9 3.1 12.7-1.9 11.6-8.4L302.4 355c-.4-2.6 .4-5.2 2.3-7.1l31-30.2c4.7-4.6 2.1-12.7-4.4-13.6l-42.9-6.2c-2.6-.4-4.9-2-6-4.4l-19.2-38.9z" />
    </Icon>
);

export default Medal;