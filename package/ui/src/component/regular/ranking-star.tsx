
import { Icon } from "../../index";

/**
 * A component that renders the `ranking-star` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ranking-star?s=regular ranking-star}
 * @preview ![ranking-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ranking-star.svg)
 */
const RankingStar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M353.8 54.1l52.3 7.5c9.3 1.4 13.2 12.9 6.4 19.8l-38 36.6 9 52.1c1.4 9.3-8.2 16.5-16.8 12.2l-46.6-24.4-46.9 24.8c-8.6 4.3-18.3-2.9-16.8-12.2l9-52.1-38-37c-6.8-6.8-2.9-18.3 6.4-19.8l52.3-7.5L309.8 6.3c4.3-8.6 16.5-8.3 20.4 0l23.6 47.8zM272 304l0 160 96 0 0-160-96 0zm-48 0c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-160zM48 368l0 96 96 0 0-96-96 0zM0 368c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96zm592 32l-96 0 0 64 96 0 0-64zm-96-48l96 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default RankingStar;