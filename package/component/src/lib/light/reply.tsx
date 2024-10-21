
import { Icon } from "../../index";

/**
 * A component that renders the `reply` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply?s=light reply}
 * @preview ![reply](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/reply.svg)
 */
const Reply: typeof Icon = x => (
    <Icon {...x}>
        <path d="M216 160c-13.3 0-24-10.7-24-24l0-8 0-16 0-48L32 208 192 352l0-48 0-16 0-8c0-13.3 10.7-24 24-24l8 0 96 0c70.7 0 128 57.3 128 128c0 8.3-.7 16.1-2 23.2c18.2-23.4 34-57.1 34-103.2c0-79.5-64.5-144-144-144l-112 0-8 0zm8 144l0 16 0 32c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4s19 16.6 19 29.2l0 32 0 16 0 16 32 0 80 0c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96l-64 0-32 0 0 16z" />
    </Icon>
);

export default Reply;