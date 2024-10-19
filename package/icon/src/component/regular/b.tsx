
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `b` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/b?s=regular b}
 * @preview ![b](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjcuNTE4IDI0OS4xOTNDMjkwLjAxNCAyMjYuMTE1IDMwNCAxOTQuNjk3IDMwNCAxNjBDMzA0IDg5LjQyMiAyNDYuNTc4IDMyIDE3NiAzMkgzMkMxNC4zMjggMzIgMCA0Ni4zMjggMCA2NFY0NDhDMCA0NjUuNjcyIDE0LjMyOCA0ODAgMzIgNDgwSDE5MkMyNjIuNTc4IDQ4MCAzMjAgNDIyLjU3OCAzMjAgMzUyQzMyMCAzMDkuNzUyIDI5OS4xNzQgMjcyLjUxOCAyNjcuNTE4IDI0OS4xOTNaTTY0IDk2SDE3NkMyMTEuMjk3IDk2IDI0MCAxMjQuNzAzIDI0MCAxNjBTMjExLjI5NyAyMjQgMTc2IDIyNEg2NFY5NlpNMTkyIDQxNkg2NFYyODhIMTkyQzIyNy4yOTcgMjg4IDI1NiAzMTYuNzAzIDI1NiAzNTJTMjI3LjI5NyA0MTYgMTkyIDQxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function B(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M267.518 249.193C290.014 226.115 304 194.697 304 160C304 89.422 246.578 32 176 32H32C14.328 32 0 46.328 0 64V448C0 465.672 14.328 480 32 480H192C262.578 480 320 422.578 320 352C320 309.752 299.174 272.518 267.518 249.193ZM64 96H176C211.297 96 240 124.703 240 160S211.297 224 176 224H64V96ZM192 416H64V288H192C227.297 288 256 316.703 256 352S227.297 416 192 416Z" />
        </Icon>
    </>
}