
import { Icon } from "../../index";

/**
 * A component that renders the `escalator` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/escalator?s=light escalator}
 * @preview ![escalator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/escalator.svg)
 */
const Escalator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M264 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-80 0a56 56 0 1 1 112 0A56 56 0 1 1 184 56zm211.3 91.8C409.9 135 428.6 128 448 128l112 0c44.2 0 80 35.8 80 80s-35.8 80-80 80l-81.9 0L244.7 492.2C230.1 505 211.4 512 192 512L80 512c-44.2 0-80-35.8-80-80s35.8-80 80-80l81.9 0L395.3 147.8zM448 160c-11.6 0-22.9 4.2-31.6 11.9L178.5 380c-2.9 2.6-6.7 4-10.5 4l-88 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l112 0c11.6 0 22.9-4.2 31.6-11.9L461.5 260c2.9-2.6 6.7-4 10.5-4l88 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-112 0zM307.9 181.7l-24.6 21.5C275.6 187.1 259.1 176 240 176c-26.5 0-48 21.5-48 48l0 59.2-32 28 0-87.2c0-44.2 35.8-80 80-80c28.7 0 53.8 15.1 67.9 37.7z" />
    </Icon>
);

export default Escalator;