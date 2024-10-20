
import { Icon } from "../../index";

/**
 * A component that renders the `dolly` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly?s=thin dolly}
 * @preview ![dolly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/dolly.svg)
 */
const Dolly: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8l88.5 0c10.5 0 19.7 6.8 22.9 16.8L231.5 388.9C208.3 398.5 192 421.3 192 448c0 35.3 28.7 64 64 64s64-28.7 64-64c0-6.4-.9-12.6-2.7-18.5l253.1-77.9c4.2-1.3 6.6-5.8 5.3-10s-5.8-6.6-10-5.3L310.7 414.8C299.5 396.3 279.2 384 256 384c-3.1 0-6.1 .2-9 .6L134.7 28C129.4 11.3 114 0 96.5 0L8 0zM256 400a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM356.7 164.1c1.3 4.2 5.8 6.6 10 5.3s6.6-5.8 5.3-10l-16.4-53.5 68.9-21.1c8.5-2.6 17.4 2.2 20 10.6l46.8 153c2.6 8.5-2.2 17.4-10.6 20l-153 46.8c-8.5 2.6-17.4-2.2-20-10.6l-46.8-153c-2.6-8.5 2.2-17.4 10.6-20l68.9-21 16.4 53.5zm-111.1-7.8l46.8 153c5.2 16.9 23.1 26.4 40 21.2l153-46.8c16.9-5.2 26.4-23.1 21.2-40l-46.8-153c-5.2-16.9-23.1-26.4-40-21.2l-153 46.8c-16.9 5.2-26.4 23.1-21.2 40z" />
    </Icon>
);

export default Dolly;