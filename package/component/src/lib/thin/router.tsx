
import { Icon } from "../../index";

/**
 * A component that renders the `router` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/router?s=thin router}
 * @preview ![router](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/router.svg)
 */
const Router: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M173.2 83c-3.3 2.9-8.4 2.6-11.3-.8s-2.6-8.4 .8-11.3C213.3 26.8 279.5 0 352 0s138.7 26.8 189.3 70.9c3.3 2.9 3.7 8 .8 11.3s-8 3.7-11.3 .8C483 41.3 420.4 16 352 16s-131 25.3-178.8 67zm79.9 79.2c-3.5 2.7-8.5 2.1-11.2-1.3s-2.1-8.5 1.3-11.2C273.1 126.1 310.9 112 352 112s78.9 14.1 108.8 37.6c3.5 2.7 4.1 7.8 1.3 11.2s-7.8 4.1-11.2 1.3C423.7 140.8 389.3 128 352 128s-71.7 12.8-98.9 34.2zM352 224c4.4 0 8 3.6 8 8l0 88 152 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l280 0 0-88c0-4.4 3.6-8 8-8zM64 336c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l448 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-160 0L64 336zm112 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM96 400a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Router;