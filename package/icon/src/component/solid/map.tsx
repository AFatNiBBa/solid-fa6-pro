
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `map` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/map?s=solid map}
 * @preview ![map](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDExNC40NDlWNDYzLjk4NEMwIDQ3NS4zMDMgMTEuNDM0IDQ4My4wNDMgMjEuOTQzIDQ3OC44NEwxNjAgNDE2VjMyTDEwLjA1OSA5OS41OTRDMy45ODQgMTAyLjAyMyAwIDEwNy45MDYgMCAxMTQuNDQ5Wk01NTQuMDU5IDMzLjE2TDQxNiA5NlY0ODBMNTY1Ljk0MyA0MTIuNDA2QzU3Mi4wMTggNDA5Ljk3NyA1NzYgNDA0LjA5NCA1NzYgMzk3LjU1MVY0OC4wMTZDNTc2IDM2LjY5NyA1NjQuNTY4IDI4Ljk1NyA1NTQuMDU5IDMzLjE2Wk0xOTIgNDE2TDM4NCA0ODBWOTZMMTkyIDMyVjQxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Map(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M0 114.449V463.984C0 475.303 11.434 483.043 21.943 478.84L160 416V32L10.059 99.594C3.984 102.023 0 107.906 0 114.449ZM554.059 33.16L416 96V480L565.943 412.406C572.018 409.977 576 404.094 576 397.551V48.016C576 36.697 564.568 28.957 554.059 33.16ZM192 416L384 480V96L192 32V416Z" />
        </Icon>
    </>
}