
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-down` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-down?s=solid square-down}
 * @preview ![square-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NCA0ODBIMzg0QzQxOS4zNDYgNDgwIDQ0OCA0NTEuMzQ2IDQ0OCA0MTZWOTZDNDQ4IDYwLjY1NCA0MTkuMzQ2IDMyIDM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwWk05Ny4yMTkgMjY1Ljg3NUM5OS42ODggMjU5Ljg5MSAxMDUuNTMxIDI1NiAxMTIgMjU2SDE3NlYxNjBDMTc2IDE0Mi4zMjcgMTkwLjMyNyAxMjggMjA4IDEyOEgyNDBDMjU3LjY3MyAxMjggMjcyIDE0Mi4zMjcgMjcyIDE2MFYyNTZIMzM2QzM0Mi40NjkgMjU2IDM0OC4zMTIgMjU5Ljg5MSAzNTAuNzgxIDI2NS44NzVDMzUzLjI2NiAyNzEuODU5IDM1MS44OTEgMjc4LjczNCAzNDcuMzEzIDI4My4zMTNMMjM1LjMxMyAzOTUuMzEzQzIyOS4wNjUgNDAxLjU2IDIxOC45MzUgNDAxLjU2IDIxMi42ODggMzk1LjMxM0wxMDAuNjg4IDI4My4zMTNDOTYuMTA5IDI3OC43MzQgOTQuNzM0IDI3MS44NTkgOTcuMjE5IDI2NS44NzVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480ZM97.219 265.875C99.688 259.891 105.531 256 112 256H176V160C176 142.327 190.327 128 208 128H240C257.673 128 272 142.327 272 160V256H336C342.469 256 348.312 259.891 350.781 265.875C353.266 271.859 351.891 278.734 347.313 283.313L235.313 395.313C229.065 401.56 218.935 401.56 212.688 395.313L100.688 283.313C96.109 278.734 94.734 271.859 97.219 265.875Z" />
        </Icon>
    </>
}