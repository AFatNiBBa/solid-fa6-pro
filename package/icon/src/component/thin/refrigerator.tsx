
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `refrigerator` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/refrigerator?s=thin refrigerator}
 * @preview ![refrigerator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMEg2NEMyOC42NTQgMCAwIDI4LjY1NCAwIDY0VjQ4MEMwIDQ5Ny42NzQgMTQuMzI2IDUxMiAzMiA1MTJIMzUyQzM2OS42NzQgNTEyIDM4NCA0OTcuNjc0IDM4NCA0ODBWNjRDMzg0IDI4LjY1NCAzNTUuMzQ2IDAgMzIwIDBaTTM2OCA0ODBDMzY4IDQ4OC44MjIgMzYwLjgyMiA0OTYgMzUyIDQ5NkgzMkMyMy4xNzggNDk2IDE2IDQ4OC44MjIgMTYgNDgwVjE5MkgyODhWMzc2QzI4OCAzODAuNDA2IDI5MS41OTQgMzg0IDI5NiAzODRTMzA0IDM4MC40MDYgMzA0IDM3NlYxOTJIMzY4VjQ4MFpNMzY4IDE3NkgzMDRWNzJDMzA0IDY3LjU3OCAzMDAuNDA2IDY0IDI5NiA2NFMyODggNjcuNTc4IDI4OCA3MlYxNzZIMTZWNjRDMTYgMzcuNTMzIDM3LjUzMyAxNiA2NCAxNkgzMjBDMzQ2LjQ2NyAxNiAzNjggMzcuNTMzIDM2OCA2NFYxNzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Refrigerator(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M320 0H64C28.654 0 0 28.654 0 64V480C0 497.674 14.326 512 32 512H352C369.674 512 384 497.674 384 480V64C384 28.654 355.346 0 320 0ZM368 480C368 488.822 360.822 496 352 496H32C23.178 496 16 488.822 16 480V192H288V376C288 380.406 291.594 384 296 384S304 380.406 304 376V192H368V480ZM368 176H304V72C304 67.578 300.406 64 296 64S288 67.578 288 72V176H16V64C16 37.533 37.533 16 64 16H320C346.467 16 368 37.533 368 64V176Z" />
        </Icon>
    </>
}