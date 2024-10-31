
import { Icon } from "../../index";

/**
 * A component that renders the `h3` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h3?s=thin h3}
 * @preview ![h3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/h3.svg)
 */
const H3: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 72c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 248 0 440c0 4.4 3.6 8 8 8s8-3.6 8-8l0-184 288 0 0 184c0 4.4 3.6 8 8 8s8-3.6 8-8l0-192 0-176c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 168L16 240 16 72zm376-8c-4.4 0-8 3.6-8 8s3.6 8 8 8l188.7 0L418.3 242.3c-2.3 2.3-3 5.7-1.7 8.7s4.2 4.9 7.4 4.9l96 0c48.6 0 88 39.4 88 88s-39.4 88-88 88l-72.6 0c-23.5 0-43.5-17-47.3-40.1l-.2-1.2c-.7-4.4-4.8-7.3-9.2-6.6s-7.3 4.8-6.6 9.2l.2 1.2c5.1 30.9 31.8 53.5 63.1 53.5l72.6 0c57.4 0 104-46.6 104-104s-46.6-104-104-104l-76.7 0L605.7 77.7c2.3-2.3 3-5.7 1.7-8.7s-4.2-4.9-7.4-4.9L392 64z" />
    </Icon>
);

export default H3;