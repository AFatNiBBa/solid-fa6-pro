
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `steam-symbol` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/steam-symbol?s=brands steam-symbol}
 * @preview ![steam-symbol](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTUuNSAxNzcuNWMwIDMzLjgtMjcuNSA2MS02MSA2MS0zMy44IDAtNjEtMjcuMy02MS02MXMyNy4zLTYxIDYxLTYxYzMzLjUgMCA2MSAyNy4yIDYxIDYxem01Mi41LjJjMCA2My01MSAxMTMuOC0xMTMuNyAxMTMuOEwyMjUgMzcxLjNjLTQgNDMtNDAuNSA3Ni44LTg0LjUgNzYuOC00MC41IDAtNzQuNy0yOC44LTgzLTY3TDAgMzU4VjI1MC43TDk3LjIgMjkwYzE1LjEtOS4yIDMyLjItMTMuMyA1Mi0xMS41bDcxLTEwMS43Yy41LTYyLjMgNTEuNS0xMTIuOCAxMTQtMTEyLjhDMzk3IDY0IDQ0OCAxMTUgNDQ4IDE3Ny43ek0yMDMgMzYzYzAtMzQuNy0yNy44LTYyLjUtNjIuNS02Mi41LTQuNSAwLTkgLjUtMTMuNSAxLjVsMjYgMTAuNWMyNS41IDEwLjIgMzggMzkgMjcuNyA2NC41LTEwLjIgMjUuNS0zOS4yIDM4LTY0LjcgMjcuNS0xMC4yLTQtMjAuNS04LjMtMzAuNy0xMi4yIDEwLjUgMTkuNyAzMS4yIDMzLjIgNTUuMiAzMy4yIDM0LjcgMCA2Mi41LTI3LjggNjIuNS02Mi41em0yMDcuNS0xODUuM2MwLTQyLTM0LjMtNzYuMi03Ni4yLTc2LjItNDIuMyAwLTc2LjUgMzQuMi03Ni41IDc2LjIgMCA0Mi4yIDM0LjMgNzYuMiA3Ni41IDc2LjIgNDEuOS4xIDc2LjItMzMuOSA3Ni4yLTc2LjJ6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function SteamSymbol(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M395.5 177.5c0 33.8-27.5 61-61 61-33.8 0-61-27.3-61-61s27.3-61 61-61c33.5 0 61 27.2 61 61zm52.5.2c0 63-51 113.8-113.7 113.8L225 371.3c-4 43-40.5 76.8-84.5 76.8-40.5 0-74.7-28.8-83-67L0 358V250.7L97.2 290c15.1-9.2 32.2-13.3 52-11.5l71-101.7c.5-62.3 51.5-112.8 114-112.8C397 64 448 115 448 177.7zM203 363c0-34.7-27.8-62.5-62.5-62.5-4.5 0-9 .5-13.5 1.5l26 10.5c25.5 10.2 38 39 27.7 64.5-10.2 25.5-39.2 38-64.7 27.5-10.2-4-20.5-8.3-30.7-12.2 10.5 19.7 31.2 33.2 55.2 33.2 34.7 0 62.5-27.8 62.5-62.5zm207.5-185.3c0-42-34.3-76.2-76.2-76.2-42.3 0-76.5 34.2-76.5 76.2 0 42.2 34.3 76.2 76.5 76.2 41.9.1 76.2-33.9 76.2-76.2z" />
        </Icon>
    </>
}