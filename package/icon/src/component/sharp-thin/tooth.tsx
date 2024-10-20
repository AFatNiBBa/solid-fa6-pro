
import { Icon } from "../../index";

/**
 * A component that renders the `tooth` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tooth?s=sharp-thin tooth}
 * @preview ![tooth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tooth.svg)
 */
const Tooth: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M130 48c17.7 0 35 5.8 49.2 16.4l40 30 21.3 16 6.4 4.8 9.6-12.8-6.4-4.8-13.4-10 22.2-19C274.4 55.3 294.2 48 314.6 48c47.2 0 85.4 38.3 85.4 85.4l0 3.6c0 13.8-3.2 27.5-9.4 39.8l-29.8 59.5-.5 1.1-.2 1.2L321.3 464l-19.4 0L253 309.6c-1.1-3.3-4.1-5.6-7.6-5.6L200 304c-3.5 0-6.6 2.3-7.7 5.7L146 464l-19.3 0L87.9 238.6l-.2-1.2-.5-1.1L57.4 176.9c-6.2-12.4-9.4-26-9.4-39.8l0-7.1c0-45.3 36.7-82 82-82zm93.7 29.7L188.8 51.6C171.8 38.9 151.2 32 130 32c-54.1 0-98 43.9-98 98l0 7.1c0 16.3 3.8 32.4 11.1 47l29.2 58.4 39.8 230.8c.7 3.8 4 6.6 7.9 6.6l32 0c3.5 0 6.6-2.3 7.7-5.7L206 320l33.5 0 48.9 154.4c1.1 3.3 4.1 5.6 7.6 5.6l32 0c3.9 0 7.2-2.8 7.9-6.6l39.8-230.8 29.2-58.4c7.3-14.6 11.1-30.7 11.1-47l0-3.6C416 77.4 370.6 32 314.6 32c-24.2 0-47.6 8.7-66 24.4L223.7 77.7z" />
    </Icon>
);

export default Tooth;