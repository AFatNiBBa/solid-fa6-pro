
import { Icon } from "../../index";

/**
 * A component that renders the `flask` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask?s=regular flask}
 * @preview ![flask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/flask.svg)
 */
const Flask: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176 196.8c0 20.7-5.8 41-16.6 58.7L119.7 320l208.6 0-39.7-64.5c-10.9-17.7-16.6-38-16.6-58.7L272 48l-96 0 0 148.8zM320 48l0 148.8c0 11.8 3.3 23.5 9.5 33.5L437.7 406.2c6.7 10.9 10.3 23.5 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4L69.4 512C31.1 512 0 480.9 0 442.6c0-12.8 3.6-25.4 10.3-36.4L118.5 230.4c6.2-10.1 9.5-21.7 9.5-33.5L128 48l-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l40 0L288 0l40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0z" />
    </Icon>
);

export default Flask;