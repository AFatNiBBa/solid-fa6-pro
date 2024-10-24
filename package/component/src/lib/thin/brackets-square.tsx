
import { Icon } from "../../index";

/**
 * A component that renders the `brackets-square` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-square?s=thin brackets-square}
 * @preview ![brackets-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/brackets-square.svg)
 */
const BracketsSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M408 32c22.1 0 40 17.9 40 40l0 368c0 22.1-17.9 40-40 40l-112 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l112 0c13.3 0 24-10.7 24-24l0-368c0-13.3-10.7-24-24-24L296 48c-4.4 0-8-3.6-8-8s3.6-8 8-8l112 0zM40 32l112 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L40 48C26.7 48 16 58.7 16 72l0 368c0 13.3 10.7 24 24 24l112 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L40 480c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32z" />
    </Icon>
);

export default BracketsSquare;