
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `confluence` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/confluence?s=brands confluence}
 * @preview ![confluence](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yLjMgNDEyLjJjLTQuNSA3LjYtMi4xIDE3LjUgNS41IDIyLjJsMTA1LjkgNjUuMmM3LjcgNC43IDE3LjcgMi40IDIyLjQtNS4zIDAtLjEuMS0uMi4xLS4yIDY3LjEtMTEyLjIgODAuNS05NS45IDI4MC45LS43IDguMSAzLjkgMTcuOC40IDIxLjctNy43LjEtLjEuMS0uMy4yLS40bDUwLjQtMTE0LjFjMy42LTguMS0uMS0xNy42LTguMS0yMS4zLTIyLjItMTAuNC02Ni4yLTMxLjItMTA1LjktNTAuM0MxMjcuNSAxNzkgNDQuNiAzNDUuMyAyLjMgNDEyLjJ6bTUwNy40LTMxMi4xYzQuNS03LjYgMi4xLTE3LjUtNS41LTIyLjJMMzk4LjQgMTIuOGMtNy41LTUtMTcuNi0zLjEtMjIuNiA0LjQtLjIuMy0uNC42LS42IDEtNjcuMyAxMTIuNi04MS4xIDk1LjYtMjgwLjYuOS04LjEtMy45LTE3LjgtLjQtMjEuNyA3LjctLjEuMS0uMS4zLS4yLjRMMjIuMiAxNDEuM2MtMy42IDguMS4xIDE3LjYgOC4xIDIxLjMgMjIuMiAxMC40IDY2LjMgMzEuMiAxMDYgNTAuNCAyNDggMTIwIDMzMC44LTQ1LjQgMzczLjQtMTEyLjl6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Confluence(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M2.3 412.2c-4.5 7.6-2.1 17.5 5.5 22.2l105.9 65.2c7.7 4.7 17.7 2.4 22.4-5.3 0-.1.1-.2.1-.2 67.1-112.2 80.5-95.9 280.9-.7 8.1 3.9 17.8.4 21.7-7.7.1-.1.1-.3.2-.4l50.4-114.1c3.6-8.1-.1-17.6-8.1-21.3-22.2-10.4-66.2-31.2-105.9-50.3C127.5 179 44.6 345.3 2.3 412.2zm507.4-312.1c4.5-7.6 2.1-17.5-5.5-22.2L398.4 12.8c-7.5-5-17.6-3.1-22.6 4.4-.2.3-.4.6-.6 1-67.3 112.6-81.1 95.6-280.6.9-8.1-3.9-17.8-.4-21.7 7.7-.1.1-.1.3-.2.4L22.2 141.3c-3.6 8.1.1 17.6 8.1 21.3 22.2 10.4 66.3 31.2 106 50.4 248 120 330.8-45.4 373.4-112.9z" />
        </Icon>
    </>
}