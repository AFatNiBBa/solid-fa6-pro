
import { Icon } from "../../index";

/**
 * A component that renders the `link-horizontal` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-horizontal?s=thin link-horizontal}
 * @preview ![link-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/link-horizontal.svg)
 */
const LinkHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 432c70.7 0 128-57.3 128-128s-57.3-128-128-128l-24 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l24 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-192 0c-61.9 0-112-50.1-112-112s50.1-112 112-112l56 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-56 0c-70.7 0-128 57.3-128 128s57.3 128 128 128l192 0zM128 80C57.3 80 0 137.3 0 208s57.3 128 128 128l24 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0C66.1 320 16 269.9 16 208S66.1 96 128 96l192 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-56 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0c70.7 0 128-57.3 128-128s-57.3-128-128-128L128 80z" />
    </Icon>
);

export default LinkHorizontal;