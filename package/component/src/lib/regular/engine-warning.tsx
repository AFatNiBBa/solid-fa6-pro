
import { Icon } from "../../index";

/**
 * A component that renders the `engine-warning` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/engine-warning?s=regular engine-warning}
 * @preview ![engine-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/engine-warning.svg)
 */
const EngineWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M424 88c0 13.3-10.7 24-24 24l-72 0 0 32 68.6 0c12.6 0 25 3.7 35.5 10.7L483.5 189c17.8 11.9 28.5 31.9 28.5 53.3L512 384c0 35.3-28.7 64-64 64l-193.2 0c-19.4 0-37.8-8.8-50-24l-32-40L144 384c-35.3 0-64-28.7-64-64l0-40-32 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 160c0-13.3 10.7-24 24-24s24 10.7 24 24l0 72 32 0 0-24c0-35.3 28.7-64 64-64l16 0 32 0 88 0 0-32-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l192 0c13.3 0 24 10.7 24 24zM210.3 354l32 40c3 3.8 7.6 6 12.5 6L448 400c8.8 0 16-7.2 16-16l0-141.7c0-5.3-2.7-10.3-7.1-13.3l-51.4-34.3c-2.6-1.8-5.7-2.7-8.9-2.7L192 192l-32 0-16 0c-8.8 0-16 7.2-16 16l0 112c0 8.8 7.2 16 16 16l28.8 0c14.6 0 28.4 6.6 37.5 18zM544 224c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-192zM304 212c11 0 20 9 20 20l0 56c0 11-9 20-20 20s-20-9-20-20l0-56c0-11 9-20 20-20zM280 352a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default EngineWarning;