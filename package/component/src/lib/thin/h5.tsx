
import { Icon } from "../../index";

/**
 * A component that renders the `h5` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h5?s=thin h5}
 * @preview ![h5](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/h5.svg)
 */
const H5: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 72c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 248 0 440c0 4.4 3.6 8 8 8s8-3.6 8-8l0-184 288 0 0 184c0 4.4 3.6 8 8 8s8-3.6 8-8l0-192 0-176c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 168L16 240 16 72zm416-8c-3.7 0-7 2.6-7.8 6.2l-40 176c-.5 2.4 0 4.9 1.5 6.8s3.8 3 6.3 3l144 0c48.6 0 88 39.4 88 88s-39.4 88-88 88l-87.6 0c-20.7 0-39-13.2-45.5-32.8l-3.2-9.7c-1.4-4.2-5.9-6.5-10.1-5.1s-6.5 5.9-5.1 10.1l3.2 9.7c8.7 26.1 33.2 43.8 60.7 43.8l87.6 0c57.4 0 104-46.6 104-104s-46.6-104-104-104l-134 0L438.4 80 600 80c4.4 0 8-3.6 8-8s-3.6-8-8-8L432 64z" />
    </Icon>
);

export default H5;