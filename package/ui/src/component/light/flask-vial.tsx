
import { Icon } from "../../index";

/**
 * A component that renders the `flask-vial` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask-vial?s=light flask-vial}
 * @preview ![flask-vial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/flask-vial.svg)
 */
const FlaskVial: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 32l16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L224 0 192 0 64 0 32 0 16 0C7.2 0 0 7.2 0 16s7.2 16 16 16l16 0 0 320c0 53 43 96 96 96c11.2 0 22-1.9 32-5.5c0-14.2 3-28.3 8.8-41.2C157.7 410.5 143.5 416 128 416c-35.3 0-64-28.7-64-64l0-160 128 0 0 160c0 4-.4 7.8-1 11.6l33-53.7L224 32zM64 32l128 0 0 128L64 160 64 32zM304 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 187.5L201.8 411.6c-6.4 10.4-9.8 22.3-9.8 34.5c0 36.4 29.5 65.9 65.9 65.9l316.2 0c36.4 0 65.9-29.5 65.9-65.9c0-12.2-3.4-24.1-9.8-34.5L512 219.5 512 32l16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L304 0zM480 32l0 192c0 3 .8 5.9 2.4 8.4L536.3 320l-240.6 0 53.9-87.6c1.6-2.5 2.4-5.4 2.4-8.4l0-192 128 0zM229 428.4L276 352l280 0 47 76.4c3.3 5.3 5 11.5 5 17.8c0 18.7-15.2 33.9-33.9 33.9l-316.2 0c-18.7 0-33.9-15.2-33.9-33.9c0-6.3 1.7-12.4 5-17.8z" />
    </Icon>
);

export default FlaskVial;