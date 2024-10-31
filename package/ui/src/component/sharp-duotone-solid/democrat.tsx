
import { Icon, generic } from "../../index";

/**
 * A component that renders the `democrat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/democrat?s=sharp-duotone-solid democrat}
 * @preview ![democrat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/democrat.svg)
 */
const Democrat: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 320c117.4 0 234.7 0 352 0l0 32 0 64 0 96-96 0 0-96-160 0 0 96-96 0 0-96 0-64 0-32z" />
        <path d="M64 32C64 12.1 80 0 80 0l48 45.7L176 0s16 12.1 16 32c0 26.5-21.9 42-29.5 46.6L248 160l232 0 64 0 14.3 0 9.5 10.6 72 80-47.6 42.8-49.4-54.9L544 240l0 80-352 0L144 208 72 256 0 184 87.6 74.6C78.1 67.4 64 53.2 64 32zM269.3 234.7L256.1 208 243 234.7l-30.2 3.9 22.1 20.4L229.4 288l26.8-14.1L282.9 288l-5.5-29.1 22.1-20.4-30.2-3.9zM368.1 208L355 234.7l-30.2 3.9 22.1 20.4L341.4 288l26.8-14.1L394.9 288l-5.5-29.1 22.1-20.4-30.2-3.9L368.1 208zm125.1 26.7L480.1 208 467 234.7l-30.2 3.9 22.1 20.4L453.4 288l26.8-14.1L506.9 288l-5.5-29.1 22.1-20.4-30.2-3.9z" />
    </Icon>
);

export default Democrat;