
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-vertical` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-vertical?s=light reflect-vertical}
 * @preview ![reflect-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/reflect-vertical.svg)
 */
const ReflectVertical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256c0-8.8 7.2-16 16-16l480 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 272c-8.8 0-16-7.2-16-16zM384 480L256 352 128 480l256 0zM128 512c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8l-256 0zm0-480L256 160 384 32 128 32zM98.4 19.8C103.4 7.8 115.1 0 128 0L384 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9z" />
    </Icon>
);

export default ReflectVertical;