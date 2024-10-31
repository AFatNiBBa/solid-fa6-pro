
import { Icon } from "../../index";

/**
 * A component that renders the `rug` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rug?s=thin rug}
 * @preview ![rug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/rug.svg)
 */
const Rug: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 72c0-4.4 3.6-8 8-8l24 0 8 0 8 0 544 0 8 0 8 0 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-24 0 0 80 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-24 0 0 72 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-24 0 0 72 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-24 0 0 80 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-24 0-8 0-8 0L48 448l-8 0-8 0L8 448c-4.4 0-8-3.6-8-8s3.6-8 8-8l24 0 0-80L8 352c-4.4 0-8-3.6-8-8s3.6-8 8-8l24 0 0-72L8 264c-4.4 0-8-3.6-8-8s3.6-8 8-8l24 0 0-72L8 176c-4.4 0-8-3.6-8-8s3.6-8 8-8l24 0 0-80L8 80c-4.4 0-8-3.6-8-8zm48 96l0 88 0 88 0 88 80 0 0-352L48 80l0 88zm96 264l352 0 0-352L144 80l0 352zM512 80l0 352 80 0 0-88 0-88 0-88 0-88-80 0z" />
    </Icon>
);

export default Rug;