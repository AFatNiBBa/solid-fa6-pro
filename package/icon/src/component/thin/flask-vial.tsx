
import { Icon } from "../../index";

/**
 * A component that renders the `flask-vial` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask-vial?s=thin flask-vial}
 * @preview ![flask-vial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/flask-vial.svg)
 */
const FlaskVial: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 16l0 311.1-16 23.1L208 176 48 176l0 176c0 44.2 35.8 80 80 80c12.7 0 24.8-3 35.5-8.3c-1.7 6.1-2.8 12.4-3.2 18.7C150.2 446 139.3 448 128 448c-53 0-96-43-96-96L32 16 8 16c-4.4 0-8-3.6-8-8S3.6 0 8 0L40 0 216 0l32 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-24 0zM48 160l160 0 0-144L48 16l0 144zM344 0L488 0l32 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-24 0 0 205.5L628.8 413.4c7.3 10.5 11.2 23 11.2 35.8c0 34.7-28.1 62.9-62.9 62.9l-322.3 0c-34.7 0-62.9-28.1-62.9-62.9c0-12.8 3.9-25.3 11.2-35.8L336 221.5 336 16l-24 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l32 0zm8 16l0 208c0 1.6-.5 3.2-1.4 4.6L287.3 320l257.5 0-63.3-91.4c-.9-1.3-1.4-2.9-1.4-4.6l0-208L352 16zM216.3 422.5c-5.4 7.8-8.3 17.1-8.3 26.7c0 25.9 21 46.9 46.9 46.9l322.3 0c25.9 0 46.9-21 46.9-46.9c0-9.5-2.9-18.8-8.3-26.7L555.8 336l-279.6 0-59.9 86.5z" />
    </Icon>
);

export default FlaskVial;