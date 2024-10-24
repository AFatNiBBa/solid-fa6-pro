
import { Icon } from "../../index";

/**
 * A component that renders the `bold` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bold?s=regular bold}
 * @preview ![bold](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bold.svg)
 */
const Bold: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 56C0 42.7 10.7 32 24 32l48 0 16 0 124 0c68.5 0 124 55.5 124 124c0 34.7-14.3 66.2-37.3 88.7C339.7 264.9 368 307.1 368 356c0 68.5-55.5 124-124 124L88 480l-16 0-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-176L48 80 24 80C10.7 80 0 69.3 0 56zM212 232c42 0 76-34 76-76s-34-76-76-76L96 80l0 152 116 0zM96 280l0 152 148 0c42 0 76-34 76-76s-34-76-76-76l-32 0L96 280z" />
    </Icon>
);

export default Bold;