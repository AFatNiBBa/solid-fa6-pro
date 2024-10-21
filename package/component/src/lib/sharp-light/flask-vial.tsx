
import { Icon } from "../../index";

/**
 * A component that renders the `flask-vial` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask-vial?s=sharp-light flask-vial}
 * @preview ![flask-vial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/flask-vial.svg)
 */
const FlaskVial: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 32l32 0 0-32L224 0 192 0 64 0 32 0 0 0 0 32l32 0 0 320c0 53 43 96 96 96c11.2 0 22-1.9 32-5.5l0-10.5 0-13.6 7.1-11.6 5.5-9C161.1 409.1 145.4 416 128 416c-35.3 0-64-28.7-64-64l0-160 128 0 0 160c0 6.7-1 13.1-2.9 19.1L224 314.4 224 32zM64 32l128 0 0 128L64 160 64 32zM304 0L288 0l0 32 16 0 16 0 0 187.5L194.4 423.6l-2.4 3.9 0 4.5 0 64 0 16 16 0 416 0 16 0 0-16 0-64 0-4.5-2.4-3.9L512 219.5 512 32l16 0 16 0 0-32L528 0 304 0zM480 32l0 192 0 4.5 2.4 3.9L536.3 320l-240.6 0 53.9-87.6 2.4-3.9 0-4.5 0-192 128 0zM224 436.5L276 352l280 0 52 84.5 0 43.5-384 0 0-43.5z" />
    </Icon>
);

export default FlaskVial;