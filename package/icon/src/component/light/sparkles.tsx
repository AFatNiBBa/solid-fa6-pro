
import { Icon } from "../../index";

/**
 * A component that renders the `sparkles` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkles?s=light sparkles}
 * @preview ![sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sparkles.svg)
 */
const Sparkles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 32c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-48c0-8.8 7.2-16 16-16zm0 288c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-48c0-8.8 7.2-16 16-16zM136.8 216.4L54.2 254.6l82.6 38.1c6.9 3.2 12.4 8.7 15.6 15.6l38.1 82.6 38.1-82.6c3.2-6.9 8.7-12.4 15.6-15.6l82.6-38.1-82.6-38.1c-6.9-3.2-12.4-8.7-15.6-15.6l-38.1-82.6-38.1 82.6c-3.2 6.9-8.7 12.4-15.6 15.6zM123.4 321.8L9.3 269.1C3.6 266.5 0 260.8 0 254.6s3.6-11.9 9.3-14.5l114.1-52.7L176 73.3c2.6-5.7 8.3-9.3 14.5-9.3s11.9 3.6 14.5 9.3l52.7 114.1L371.8 240c5.7 2.6 9.3 8.3 9.3 14.5s-3.6 11.9-9.3 14.5L257.8 321.8 205.1 435.8c-2.6 5.7-8.3 9.3-14.5 9.3s-11.9-3.6-14.5-9.3L123.4 321.8z" />
    </Icon>
);

export default Sparkles;