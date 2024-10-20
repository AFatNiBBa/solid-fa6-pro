
import { Icon } from "../../index";

/**
 * A component that renders the `h5` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h5?s=sharp-regular h5}
 * @preview ![h5](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/h5.svg)
 */
const H5: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 88l0-24L0 64 0 88 0 248 0 424l0 24 48 0 0-24 0-152 224 0 0 152 0 24 48 0 0-24 0-176 0-160 0-24-48 0 0 24 0 136L48 224 48 88zM440 64l-20.7 0-3.1 20.4-24 160L388.1 272l27.9 0 112 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-61.8 0c-14.3 0-26.8-9.5-30.8-23.2l-4.4-15.4-46.2 13.2 4.4 15.4c9.8 34.3 41.2 58 76.9 58l61.8 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-84.1 0 16.8-112L584 112l24 0 0-48-24 0L440 64z" />
    </Icon>
);

export default H5;