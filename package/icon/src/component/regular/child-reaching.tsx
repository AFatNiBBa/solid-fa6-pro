
import { Icon } from "../../index";

/**
 * A component that renders the `child-reaching` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child-reaching?s=regular child-reaching}
 * @preview ![child-reaching](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/child-reaching.svg)
 */
const ChildReaching: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 96A72 72 0 1 0 192 0a72 72 0 1 0 0 144zm-.2 32c-41.6 0-80-22.4-100.6-58.5L76.9 92.2c-6.5-11.5-21.2-15.6-32.7-9s-15.6 21.2-9 32.7l14.4 25.3c15 26.5 36.8 47.7 62.5 62.1L112 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104 64 0 0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-285c25-14 46.2-34.6 61.1-60.2l15.6-26.7c6.7-11.4 2.8-26.1-8.6-32.8s-26.1-2.8-32.8 8.6l-15.6 26.7C271 154.2 232.9 176 191.8 176zM224 336l-64 0 0-115.1c10.4 2.1 21 3.1 31.8 3.1c10.9 0 21.7-1.1 32.2-3.2L224 336z" />
    </Icon>
);

export default ChildReaching;