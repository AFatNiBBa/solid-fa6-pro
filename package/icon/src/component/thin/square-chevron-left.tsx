
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-chevron-left` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-left?s=thin square-chevron-left}
 * @preview ![square-chevron-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzcuMzQ0IDM2Mi4xNTZMMTYzLjYwOSAyNTZMMjc3LjM0NCAxNDkuODQ0QzI3OS4wMzEgMTQ4LjI4MSAyNzkuODkxIDE0Ni4xMjUgMjc5Ljg5MSAxNDRDMjc5Ljg5MSAxNDIuMDMxIDI3OS4xNzIgMTQwLjA5NCAyNzcuNzM0IDEzOC41MzFDMjc0LjcxOSAxMzUuMzEzIDI2OS42NTYgMTM1LjEyNSAyNjYuNDM4IDEzOC4xNTZMMTQ2LjQzOCAyNTAuMTU2QzE0My4xODggMjUzLjE1NiAxNDMuMTg4IDI1OC44NDQgMTQ2LjQzOCAyNjEuODQ0TDI2Ni40MzggMzczLjg0NEMyNjkuNjU2IDM3Ni44NzUgMjc0LjcxOSAzNzYuNjg4IDI3Ny43MzQgMzczLjQ2OUMyODAuNzM0IDM3MC4yMTkgMjgwLjU5NCAzNjUuMTg4IDI3Ny4zNDQgMzYyLjE1NlpNNDQ4IDQxNlY5NkM0NDggNjAuNjU2IDQxOS4zNDYgMzIgMzg0IDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1NiAwIDk2VjQxNkMwIDQ1MS4zNDggMjguNjU0IDQ4MCA2NCA0ODBIMzg0QzQxOS4zNDYgNDgwIDQ0OCA0NTEuMzQ4IDQ0OCA0MTZaTTY0IDQ2NEMzNy41MzMgNDY0IDE2IDQ0Mi40NjkgMTYgNDE2Vjk2QzE2IDY5LjUzMSAzNy41MzMgNDggNjQgNDhIMzg0QzQxMC40NjcgNDggNDMyIDY5LjUzMSA0MzIgOTZWNDE2QzQzMiA0NDIuNDY5IDQxMC40NjcgNDY0IDM4NCA0NjRINjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareChevronLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M277.344 362.156L163.609 256L277.344 149.844C279.031 148.281 279.891 146.125 279.891 144C279.891 142.031 279.172 140.094 277.734 138.531C274.719 135.313 269.656 135.125 266.438 138.156L146.438 250.156C143.188 253.156 143.188 258.844 146.438 261.844L266.438 373.844C269.656 376.875 274.719 376.688 277.734 373.469C280.734 370.219 280.594 365.188 277.344 362.156ZM448 416V96C448 60.656 419.346 32 384 32H64C28.654 32 0 60.656 0 96V416C0 451.348 28.654 480 64 480H384C419.346 480 448 451.348 448 416ZM64 464C37.533 464 16 442.469 16 416V96C16 69.531 37.533 48 64 48H384C410.467 48 432 69.531 432 96V416C432 442.469 410.467 464 384 464H64Z" />
        </Icon>
    </>
}