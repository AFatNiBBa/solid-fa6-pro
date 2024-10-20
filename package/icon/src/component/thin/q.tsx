
import { Icon } from "../../index";

/**
 * A component that renders the `q` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/q?s=thin q}
 * @preview ![q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/q.svg)
 */
const Q: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 256c0 114.9 93.1 208 208 208c49.5 0 95-17.3 130.7-46.2L226 269.2c-2.9-3.3-2.5-8.4 .8-11.3s8.4-2.5 11.3 .8L366.8 407.3C406.9 369.4 432 315.6 432 256c0-114.9-93.1-208-208-208S16 141.1 16 256zM365.2 429.9C326.7 461.2 277.5 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 64.4-27.2 122.5-70.8 163.4L446 498.8c2.9 3.3 2.5 8.4-.8 11.3s-8.4 2.5-11.3-.8l-68.8-79.3z" />
    </Icon>
);

export default Q;