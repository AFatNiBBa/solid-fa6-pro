
import { Icon } from "../../index";

/**
 * A component that renders the `h2` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h2?s=thin h2}
 * @preview ![h2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/h2.svg)
 */
const H2: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 72c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 248 0 440c0 4.4 3.6 8 8 8s8-3.6 8-8l0-184 288 0 0 184c0 4.4 3.6 8 8 8s8-3.6 8-8l0-192 0-176c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 168L16 240 16 72zm410.9 35.5c20.7-17.7 47-27.5 74.2-27.5l4.2 0c52.2 0 94.6 42.4 94.6 94.6c0 24.5-9.5 48-26.5 65.7L386.2 434.4c-2.2 2.3-2.9 5.7-1.6 8.7s4.2 4.9 7.4 4.9l232 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-213.2 0L585 251.4c19.9-20.6 31-48.1 31-76.8C616 113.5 566.5 64 505.4 64l-4.2 0c-31.1 0-61.1 11.1-84.7 31.3l-21.7 18.6c-3.4 2.9-3.7 7.9-.9 11.3s7.9 3.7 11.3 .9l21.7-18.6z" />
    </Icon>
);

export default H2;